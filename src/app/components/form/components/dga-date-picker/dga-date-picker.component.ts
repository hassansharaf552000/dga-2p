import { Component, EventEmitter, Input, Output } from '@angular/core';

export type DatePickerMode = 'picker' | 'range';
export type DatePickerSize = 'small' | 'medium' | 'large';
export type DatePickerState = 'default' | 'normal' | 'hovered' | 'pressed' | 'focused' | 'disabled' | 'error' | 'read-only';
export type DatePickerVariant = 'default' | 'filled' | 'outlined' | 'ghost' | 'on-color';
export type DatePickerRangeEdge = 'start' | 'end';

export interface DatePickerRangeValue {
  start: string;
  end: string;
}

interface DatePickerCell {
  date: Date;
  day: number;
  value: string;
  inMonth: boolean;
  selected: boolean;
  inRange: boolean;
  rangeStart: boolean;
  rangeEnd: boolean;
  today: boolean;
  disabled: boolean;
}

let nextDatePickerId = 0;

@Component({
  selector: 'dga-date-picker',
  standalone: true,
  imports: [],
  templateUrl: './dga-date-picker.component.html',
  styleUrls: ['./dga-date-picker.component.scss', './dga-date-picker-calendar.component.scss']
})
export class DgaDatePickerComponent {
  @Input() label = '';
  @Input() placeholder = 'Select date';
  @Input() helperText = '';
  @Input() error = '';
  @Input() min = '';
  @Input() max = '';
  @Input() inputId = `dga-date-picker-${nextDatePickerId++}`;
  @Input() mode: DatePickerMode | string = 'picker';
  @Input() variant: DatePickerVariant | string = 'default';
  @Input() size: DatePickerSize = 'medium';
  @Input() state: DatePickerState = 'default';
  @Input() disabled = false;
  @Input() readOnly = false;
  @Input() required = false;
  @Input() rtl = false;
  @Input() onColor = false;
  @Input() fullWidth = false;
  @Input() range: boolean | string = false;
  @Input() startPlaceholder = 'Start date';
  @Input() endPlaceholder = 'End date';
  @Input() rangeSeparator = 'to';

  @Input()
  set value(value: string) {
    this.dateValue = value || '';
    const parsedDate = this.parseDate(this.dateValue);
    if (parsedDate) this.setViewDate(parsedDate);
  }
  get value(): string {
    return this.dateValue;
  }

  @Input()
  set startValue(value: string) {
    this.rangeStartValue = value || '';
    const parsedDate = this.parseDate(this.rangeStartValue);
    if (parsedDate) this.setViewDate(parsedDate);
  }
  get startValue(): string {
    return this.rangeStartValue;
  }

  @Input()
  set endValue(value: string) {
    this.rangeEndValue = value || '';
    const parsedDate = this.parseDate(this.rangeEndValue);
    if (parsedDate) this.setViewDate(parsedDate);
  }
  get endValue(): string {
    return this.rangeEndValue;
  }

  @Output() valueChange = new EventEmitter<string>();
  @Output() startValueChange = new EventEmitter<string>();
  @Output() endValueChange = new EventEmitter<string>();
  @Output() rangeChange = new EventEmitter<DatePickerRangeValue>();

  calendarOpen = false;
  activeRangeEdge: DatePickerRangeEdge = 'start';
  viewMonth = new Date().getMonth();
  viewYear = new Date().getFullYear();

  readonly weekdayLabels = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

  private dateValue = '';
  private rangeStartValue = '';
  private rangeEndValue = '';

  get datePickerClasses(): string[] {
    const stateClass = this.isDisabled ? 'dga-date-picker--disabled' : `dga-date-picker--${this.resolvedState}`;

    return [
      'dga-date-picker',
      `dga-date-picker--${this.resolvedMode}`,
      `dga-date-picker--${this.size}`,
      `dga-date-picker--${this.resolvedVariant}`,
      stateClass,
      this.isReadOnly ? 'dga-date-picker--read-only' : '',
      this.fullWidth ? 'dga-date-picker--full-width' : '',
      this.rtl ? 'dga-date-picker--rtl' : ''
    ].filter(Boolean);
  }

  get resolvedMode(): DatePickerMode {
    const mode = `${this.mode}`.toLowerCase();
    const range = `${this.range}`.toLowerCase();
    return mode === 'range' || this.range === true || this.range === '' || range === 'true' ? 'range' : 'picker';
  }

  get isRangeMode(): boolean {
    return this.resolvedMode === 'range';
  }

  get resolvedVariant(): DatePickerVariant {
    if (this.onColor) return 'on-color';
    const variant = `${this.variant}`.toLowerCase();
    return ['filled', 'outlined', 'ghost', 'on-color'].includes(variant)
      ? variant as DatePickerVariant
      : 'default';
  }

  get resolvedState(): Exclude<DatePickerState, 'normal'> {
    if (this.error) return 'error';
    return this.state === 'normal' ? 'default' : this.state;
  }

  get isDisabled(): boolean {
    return this.disabled || this.state === 'disabled';
  }

  get isReadOnly(): boolean {
    return this.readOnly || this.state === 'read-only';
  }

  get isInteractive(): boolean {
    return !this.isDisabled && !this.isReadOnly;
  }

  get displayValue(): string {
    return this.formatValue(this.dateValue);
  }

  get startDisplayValue(): string {
    return this.formatValue(this.rangeStartValue);
  }

  get endDisplayValue(): string {
    return this.formatValue(this.rangeEndValue);
  }

  get rangeDisplayValue(): string {
    const start = this.startDisplayValue;
    const end = this.endDisplayValue;
    return [start, end].filter(Boolean).join(` ${this.rangeSeparator} `);
  }

  get monthLabel(): string {
    return new Intl.DateTimeFormat('en-US', { month: 'long', year: 'numeric' })
      .format(new Date(this.viewYear, this.viewMonth, 1));
  }

  get calendarCells(): DatePickerCell[] {
    const selectedDate = this.parseDate(this.dateValue);
    const rangeBounds = this.rangeBounds;
    const firstOfMonth = new Date(this.viewYear, this.viewMonth, 1);
    const gridStart = new Date(firstOfMonth);
    gridStart.setDate(firstOfMonth.getDate() - firstOfMonth.getDay());

    return Array.from({ length: 42 }, (_, index) => {
      const date = new Date(gridStart);
      date.setDate(gridStart.getDate() + index);
      const value = this.toInputValue(date);
      const isRangeStart = this.isRangeMode && this.rangeStartValue === value;
      const isRangeEnd = this.isRangeMode && this.rangeEndValue === value;

      return {
        date,
        day: date.getDate(),
        value,
        inMonth: date.getMonth() === this.viewMonth,
        selected: this.isRangeMode ? isRangeStart || isRangeEnd : !!selectedDate && this.isSameDate(date, selectedDate),
        inRange: this.isRangeMode && !!rangeBounds && value > rangeBounds.start && value < rangeBounds.end,
        rangeStart: isRangeStart,
        rangeEnd: isRangeEnd,
        today: this.isSameDate(date, new Date()),
        disabled: this.isDateDisabled(value)
      };
    });
  }

  toggleCalendar(): void {
    if (!this.isInteractive) return;
    this.calendarOpen = !this.calendarOpen;
  }

  openCalendar(): void {
    if (this.isInteractive) this.calendarOpen = true;
  }

  closeCalendar(): void {
    this.calendarOpen = false;
  }

  onInput(value: string): void {
    if (!this.isInteractive) return;
    this.dateValue = value;
    const parsedDate = this.parseDate(value);
    if (parsedDate) this.setViewDate(parsedDate);
    this.valueChange.emit(this.dateValue);
  }

  onRangeInput(edge: DatePickerRangeEdge, value: string): void {
    if (!this.isInteractive) return;
    this.activeRangeEdge = edge;

    if (edge === 'start') {
      this.rangeStartValue = value;
    } else {
      this.rangeEndValue = value;
    }

    const parsedDate = this.parseDate(value);
    if (parsedDate) this.setViewDate(parsedDate);
    this.emitRange();
  }

  onRangeInputFocus(edge: DatePickerRangeEdge): void {
    this.activeRangeEdge = edge;
    this.openCalendar();
  }

  onInputKeydown(event: KeyboardEvent): void {
    if (event.key === 'ArrowDown' || event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      this.openCalendar();
    } else if (event.key === 'Escape') {
      this.closeCalendar();
    }
  }

  selectDate(cell: DatePickerCell): void {
    if (cell.disabled) return;
    if (this.isRangeMode) {
      this.selectRangeDate(cell);
      return;
    }

    this.dateValue = cell.value;
    this.setViewDate(cell.date);
    this.valueChange.emit(cell.value);
    this.closeCalendar();
  }

  previousMonth(): void {
    const date = new Date(this.viewYear, this.viewMonth - 1, 1);
    this.setViewDate(date);
  }

  nextMonth(): void {
    const date = new Date(this.viewYear, this.viewMonth + 1, 1);
    this.setViewDate(date);
  }

  goToToday(): void {
    const today = new Date();
    const value = this.toInputValue(today);
    if (this.isDateDisabled(value)) {
      this.setViewDate(today);
      return;
    }

    if (this.isRangeMode) {
      this.selectRangeDate({
        date: today,
        day: today.getDate(),
        value,
        inMonth: today.getMonth() === this.viewMonth,
        selected: false,
        inRange: false,
        rangeStart: false,
        rangeEnd: false,
        today: true,
        disabled: false
      });
      return;
    }

    this.dateValue = value;
    this.setViewDate(today);
    this.valueChange.emit(value);
    this.closeCalendar();
  }

  private selectRangeDate(cell: DatePickerCell): void {
    const value = cell.value;

    if (this.activeRangeEdge === 'end' && this.rangeStartValue) {
      if (value < this.rangeStartValue) {
        this.rangeEndValue = this.rangeStartValue;
        this.rangeStartValue = value;
      } else {
        this.rangeEndValue = value;
      }

      this.activeRangeEdge = 'start';
      this.setViewDate(cell.date);
      this.emitRange();
      this.closeCalendar();
      return;
    }

    this.rangeStartValue = value;
    this.rangeEndValue = '';
    this.activeRangeEdge = 'end';
    this.setViewDate(cell.date);
    this.emitRange();
  }

  private setViewDate(date: Date): void {
    this.viewMonth = date.getMonth();
    this.viewYear = date.getFullYear();
  }

  private isDateDisabled(value: string): boolean {
    return (!!this.min && value < this.min) || (!!this.max && value > this.max);
  }

  private get rangeBounds(): DatePickerRangeValue | null {
    if (!this.rangeStartValue || !this.rangeEndValue) return null;
    return this.rangeStartValue <= this.rangeEndValue
      ? { start: this.rangeStartValue, end: this.rangeEndValue }
      : { start: this.rangeEndValue, end: this.rangeStartValue };
  }

  private emitRange(): void {
    this.startValueChange.emit(this.rangeStartValue);
    this.endValueChange.emit(this.rangeEndValue);
    this.rangeChange.emit({ start: this.rangeStartValue, end: this.rangeEndValue });
  }

  private parseDate(value: string): Date | null {
    if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) return null;
    const [year, month, day] = value.split('-').map(Number);
    const date = new Date(year, month - 1, day);
    return date.getFullYear() === year && date.getMonth() === month - 1 && date.getDate() === day
      ? date
      : null;
  }

  private toInputValue(date: Date): string {
    const year = date.getFullYear();
    const month = `${date.getMonth() + 1}`.padStart(2, '0');
    const day = `${date.getDate()}`.padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  private formatValue(value: string): string {
    const parsedDate = this.parseDate(value);
    return parsedDate ? this.formatDisplayDate(parsedDate) : value;
  }

  private formatDisplayDate(date: Date): string {
    return new Intl.DateTimeFormat('en-GB', {
      day: '2-digit',
      month: 'short',
      year: 'numeric'
    }).format(date);
  }

  private isSameDate(first: Date, second: Date): boolean {
    return first.getFullYear() === second.getFullYear()
      && first.getMonth() === second.getMonth()
      && first.getDate() === second.getDate();
  }
}
