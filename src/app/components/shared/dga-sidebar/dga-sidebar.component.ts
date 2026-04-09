import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

interface ComponentItem {
  name: string;
  route: string;
}

interface ComponentCategory {
  name: string;
  icon: string;
  expanded: boolean;
  components: ComponentItem[];
}

@Component({
  selector: 'dga-sidebar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './dga-sidebar.component.html',
  styleUrl: './dga-sidebar.component.scss'
})
export class DgaSidebarComponent {
  categories = signal<ComponentCategory[]>([
    {
      name: 'Core',
      icon: '🧩',
      expanded: true,
      components: [
        { name: 'Accordion', route: '/accordion' },
        { name: 'Avatar', route: '/avatar' },
        { name: 'Button', route: '/button' },
        { name: 'Link', route: '/link' },
        { name: 'Divider', route: '/divider' },
        { name: 'Chip', route: '/chip' },
        { name: 'Badge', route: '/badge' },
        { name: 'Icon', route: '/icon' }
      ]
    },
    {
      name: 'Form',
      icon: '📝',
      expanded: false,
      components: [
        { name: 'Text Input', route: '/text-input' },
        { name: 'Textarea', route: '/textarea' },
        { name: 'Number Input', route: '/number-input' },
        { name: 'Checkbox', route: '/checkbox' },
        { name: 'Radio', route: '/radio' },
        { name: 'Switch', route: '/switch' },
        { name: 'Slider', route: '/slider' },
        { name: 'Rating', route: '/rating' },
        { name: 'Date Picker', route: '/date-picker' },
        { name: 'Dropdown', route: '/dropdown' },
        { name: 'Search Box', route: '/search-box' },
        { name: 'File Upload', route: '/file-upload' }
      ]
    },
    {
      name: 'Data Display',
      icon: '📊',
      expanded: false,
      components: [
        { name: 'Card', route: '/card' },
        { name: 'Table', route: '/table' },
        { name: 'List', route: '/list' },
        { name: 'Structured List', route: '/structured-list' },
        { name: 'Metric', route: '/metric' },
        { name: 'Quote', route: '/quote' },
        { name: 'Code Snippet', route: '/code-snippet' },
        { name: 'Charts', route: '/charts' },
        { name: 'Progress Bar', route: '/progress-bar' },
        { name: 'Progress Indicator', route: '/progress-indicator' },
        { name: 'Skeleton', route: '/skeleton' },
        { name: 'Digital Stamp', route: '/digital-stamp' }
      ]
    },
    {
      name: 'Feedback',
      icon: '🔔',
      expanded: false,
      components: [
        { name: 'Inline Alert', route: '/inline-alert' },
        { name: 'Notification', route: '/notification' },
        { name: 'Notification Toast', route: '/notification-toast' },
        { name: 'Loading', route: '/loading' },
        { name: 'Modal', route: '/modal' },
        { name: 'Tooltip', route: '/tooltip' }
      ]
    },
    {
      name: 'Navigation',
      icon: '🧭',
      expanded: false,
      components: [
        { name: 'Breadcrumb', route: '/breadcrumb' },
        { name: 'Pagination', route: '/pagination' },
        { name: 'Tabs', route: '/tabs' },
        { name: 'Menu', route: '/menu' },
        { name: 'Slideout Menu', route: '/slideout-menu' },
        { name: 'Carousel', route: '/carousel' },
        { name: 'Content Switcher', route: '/content-switcher' },
        { name: 'Radial Stepper', route: '/radial-stepper' }
      ]
    },
    {
      name: 'Utility',
      icon: '🎛',
      expanded: false,
      components: [
        { name: 'Floating Button', route: '/floating-button' },
        { name: 'Filtration', route: '/filtration' }
      ]
    },
    {
      name: 'Layout',
      icon: '🏗',
      expanded: false,
      components: [
        { name: 'Nav Header', route: '/nav-header' },
        { name: 'Nav Drawer', route: '/nav-drawer' },
        { name: 'Second Level Nav', route: '/second-level-nav' },
        { name: 'Table of Content', route: '/table-of-content' }
      ]
    }
  ]);

  toggleCategory(category: ComponentCategory): void {
    const updated = this.categories().map(cat => 
      cat.name === category.name 
        ? { ...cat, expanded: !cat.expanded } 
        : cat
    );
    this.categories.set(updated);
  }
}
