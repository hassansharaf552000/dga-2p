import { Routes } from '@angular/router';

export const routes: Routes = [
  // Main Playground Page
  { path: '', loadComponent: () => import('./components/shared/dga-main-playground/dga-main-playground.component').then(m => m.DgaMainPlaygroundComponent) },

  // Core Components
  { path: 'accordion', loadComponent: () => import('./components/core/playgrounds/dga-accordion-playground/dga-accordion-playground.component').then(m => m.DgaAccordionPlaygroundComponent) },
  { path: 'avatar', loadComponent: () => import('./components/core/playgrounds/dga-avatar-playground/dga-avatar-playground.component').then(m => m.DgaAvatarPlaygroundComponent) },
  { path: 'button', loadComponent: () => import('./components/core/playgrounds/dga-button-playground/dga-button-playground.component').then(m => m.DgaButtonPlaygroundComponent) },
  { path: 'link', loadComponent: () => import('./components/core/playgrounds/dga-link-playground/dga-link-playground.component').then(m => m.DgaLinkPlaygroundComponent) },
  { path: 'divider', loadComponent: () => import('./components/core/playgrounds/dga-divider-playground/dga-divider-playground.component').then(m => m.DgaDividerPlaygroundComponent) },
  { path: 'chip', loadComponent: () => import('./components/core/playgrounds/dga-chip-playground/dga-chip-playground.component').then(m => m.DgaChipPlaygroundComponent) },
  { path: 'badge', loadComponent: () => import('./components/core/playgrounds/dga-badge-playground/dga-badge-playground.component').then(m => m.DgaBadgePlaygroundComponent) },
  { path: 'icon', loadComponent: () => import('./components/core/playgrounds/dga-icon-playground/dga-icon-playground.component').then(m => m.DgaIconPlaygroundComponent) },

  // Form Components
  { path: 'text-input', loadComponent: () => import('./components/form/playgrounds/dga-text-input-playground/dga-text-input-playground.component').then(m => m.DgaTextInputPlaygroundComponent) },
  { path: 'textarea', loadComponent: () => import('./components/form/playgrounds/dga-textarea-playground/dga-textarea-playground.component').then(m => m.DgaTextareaPlaygroundComponent) },
  { path: 'number-input', loadComponent: () => import('./components/form/playgrounds/dga-number-input-playground/dga-number-input-playground.component').then(m => m.DgaNumberInputPlaygroundComponent) },
  { path: 'checkbox', loadComponent: () => import('./components/form/playgrounds/dga-checkbox-playground/dga-checkbox-playground.component').then(m => m.DgaCheckboxPlaygroundComponent) },
  { path: 'radio', loadComponent: () => import('./components/form/playgrounds/dga-radio-playground/dga-radio-playground.component').then(m => m.DgaRadioPlaygroundComponent) },
  { path: 'switch', loadComponent: () => import('./components/form/playgrounds/dga-switch-playground/dga-switch-playground.component').then(m => m.DgaSwitchPlaygroundComponent) },
  { path: 'slider', loadComponent: () => import('./components/form/playgrounds/dga-slider-playground/dga-slider-playground.component').then(m => m.DgaSliderPlaygroundComponent) },
  { path: 'rating', loadComponent: () => import('./components/form/playgrounds/dga-rating-playground/dga-rating-playground.component').then(m => m.DgaRatingPlaygroundComponent) },
  { path: 'date-picker', loadComponent: () => import('./components/form/playgrounds/dga-date-picker-playground/dga-date-picker-playground.component').then(m => m.DgaDatePickerPlaygroundComponent) },
  { path: 'dropdown', loadComponent: () => import('./components/form/playgrounds/dga-dropdown-playground/dga-dropdown-playground.component').then(m => m.DgaDropdownPlaygroundComponent) },
  { path: 'search-box', loadComponent: () => import('./components/form/playgrounds/dga-search-box-playground/dga-search-box-playground.component').then(m => m.DgaSearchBoxPlaygroundComponent) },
  { path: 'file-upload', loadComponent: () => import('./components/form/playgrounds/dga-file-upload-playground/dga-file-upload-playground.component').then(m => m.DgaFileUploadPlaygroundComponent) },

  // Data Display Components
  { path: 'card', loadComponent: () => import('./components/data-display/playgrounds/dga-card-playground/dga-card-playground.component').then(m => m.DgaCardPlaygroundComponent) },
  { path: 'table', loadComponent: () => import('./components/data-display/playgrounds/dga-table-playground/dga-table-playground.component').then(m => m.DgaTablePlaygroundComponent) },
  { path: 'list', loadComponent: () => import('./components/data-display/playgrounds/dga-list-playground/dga-list-playground.component').then(m => m.DgaListPlaygroundComponent) },
  { path: 'structured-list', loadComponent: () => import('./components/data-display/playgrounds/dga-structured-list-playground/dga-structured-list-playground.component').then(m => m.DgaStructuredListPlaygroundComponent) },
  { path: 'metric', loadComponent: () => import('./components/data-display/playgrounds/dga-metric-playground/dga-metric-playground.component').then(m => m.DgaMetricPlaygroundComponent) },
  { path: 'quote', loadComponent: () => import('./components/data-display/playgrounds/dga-quote-playground/dga-quote-playground.component').then(m => m.DgaQuotePlaygroundComponent) },
  { path: 'code-snippet', loadComponent: () => import('./components/data-display/playgrounds/dga-code-snippet-playground/dga-code-snippet-playground.component').then(m => m.DgaCodeSnippetPlaygroundComponent) },
  { path: 'charts', loadComponent: () => import('./components/data-display/playgrounds/dga-charts-playground/dga-charts-playground.component').then(m => m.DgaChartsPlaygroundComponent) },
  { path: 'progress-bar', loadComponent: () => import('./components/data-display/playgrounds/dga-progress-bar-playground/dga-progress-bar-playground.component').then(m => m.DgaProgressBarPlaygroundComponent) },
  { path: 'progress-indicator', loadComponent: () => import('./components/data-display/playgrounds/dga-progress-indicator-playground/dga-progress-indicator-playground.component').then(m => m.DgaProgressIndicatorPlaygroundComponent) },
  { path: 'skeleton', loadComponent: () => import('./components/data-display/playgrounds/dga-skeleton-playground/dga-skeleton-playground.component').then(m => m.DgaSkeletonPlaygroundComponent) },
  { path: 'digital-stamp', loadComponent: () => import('./components/data-display/playgrounds/dga-digital-stamp-playground/dga-digital-stamp-playground.component').then(m => m.DgaDigitalStampPlaygroundComponent) },

  // Feedback & Status Components
  { path: 'inline-alert', loadComponent: () => import('./components/feedback/playgrounds/dga-inline-alert-playground/dga-inline-alert-playground.component').then(m => m.DgaInlineAlertPlaygroundComponent) },
  { path: 'notification', loadComponent: () => import('./components/feedback/playgrounds/dga-notification-playground/dga-notification-playground.component').then(m => m.DgaNotificationPlaygroundComponent) },
  { path: 'notification-toast', loadComponent: () => import('./components/feedback/playgrounds/dga-notification-toast-playground/dga-notification-toast-playground.component').then(m => m.DgaNotificationToastPlaygroundComponent) },
  { path: 'loading', loadComponent: () => import('./components/feedback/playgrounds/dga-loading-playground/dga-loading-playground.component').then(m => m.DgaLoadingPlaygroundComponent) },
  { path: 'modal', loadComponent: () => import('./components/feedback/playgrounds/dga-modal-playground/dga-modal-playground.component').then(m => m.DgaModalPlaygroundComponent) },
  { path: 'tooltip', loadComponent: () => import('./components/feedback/playgrounds/dga-tooltip-playground/dga-tooltip-playground.component').then(m => m.DgaTooltipPlaygroundComponent) },

  // Navigation Components
  { path: 'breadcrumb', loadComponent: () => import('./components/navigation/playgrounds/dga-breadcrumb-playground/dga-breadcrumb-playground.component').then(m => m.DgaBreadcrumbPlaygroundComponent) },
  { path: 'pagination', loadComponent: () => import('./components/navigation/playgrounds/dga-pagination-playground/dga-pagination-playground.component').then(m => m.DgaPaginationPlaygroundComponent) },
  { path: 'tabs', loadComponent: () => import('./components/navigation/playgrounds/dga-tabs-playground/dga-tabs-playground.component').then(m => m.DgaTabsPlaygroundComponent) },
  { path: 'menu', loadComponent: () => import('./components/navigation/playgrounds/dga-menu-playground/dga-menu-playground.component').then(m => m.DgaMenuPlaygroundComponent) },
  { path: 'slideout-menu', loadComponent: () => import('./components/navigation/playgrounds/dga-slideout-menu-playground/dga-slideout-menu-playground.component').then(m => m.DgaSlideoutMenuPlaygroundComponent) },
  { path: 'carousel', loadComponent: () => import('./components/navigation/playgrounds/dga-carousel-playground/dga-carousel-playground.component').then(m => m.DgaCarouselPlaygroundComponent) },
  { path: 'content-switcher', loadComponent: () => import('./components/navigation/playgrounds/dga-content-switcher-playground/dga-content-switcher-playground.component').then(m => m.DgaContentSwitcherPlaygroundComponent) },
  { path: 'radial-stepper', loadComponent: () => import('./components/navigation/playgrounds/dga-radial-stepper-playground/dga-radial-stepper-playground.component').then(m => m.DgaRadialStepperPlaygroundComponent) },

  // Utility Components
  { path: 'floating-button', loadComponent: () => import('./components/utility/playgrounds/dga-floating-button-playground/dga-floating-button-playground.component').then(m => m.DgaFloatingButtonPlaygroundComponent) },
  { path: 'filtration', loadComponent: () => import('./components/utility/playgrounds/dga-filtration-playground/dga-filtration-playground.component').then(m => m.DgaFiltrationPlaygroundComponent) },

  // Layout/Shell Components
  { path: 'nav-header', loadComponent: () => import('./components/layout/playgrounds/dga-ui-shell-nav-header-playground/dga-ui-shell-nav-header-playground.component').then(m => m.DgaUiShellNavHeaderPlaygroundComponent) },
  { path: 'nav-drawer', loadComponent: () => import('./components/layout/playgrounds/dga-ui-shell-nav-drawer-playground/dga-ui-shell-nav-drawer-playground.component').then(m => m.DgaUiShellNavDrawerPlaygroundComponent) },
  { path: 'second-level-nav', loadComponent: () => import('./components/layout/playgrounds/dga-ui-shell-second-level-nav-header-playground/dga-ui-shell-second-level-nav-header-playground.component').then(m => m.DgaUiShellSecondLevelNavHeaderPlaygroundComponent) },
  { path: 'table-of-content', loadComponent: () => import('./components/layout/playgrounds/dga-ui-shell-table-of-content-playground/dga-ui-shell-table-of-content-playground.component').then(m => m.DgaUiShellTableOfContentPlaygroundComponent) },

  // Fallback
  { path: '**', redirectTo: '' }
];
