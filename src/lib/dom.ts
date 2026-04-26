const DEFAULT_INVALID_SELECTOR = '.invalid-field';

function isDisabledFormControl(element: HTMLElement) {
  return (
    (element instanceof HTMLButtonElement ||
      element instanceof HTMLInputElement ||
      element instanceof HTMLSelectElement ||
      element instanceof HTMLTextAreaElement) &&
    element.disabled
  );
}

function isHiddenInput(element: HTMLElement) {
  return element instanceof HTMLInputElement && element.type === 'hidden';
}

function isVisibleAndEnabled(element: HTMLElement) {
  if (element.hidden || isHiddenInput(element) || isDisabledFormControl(element)) {
    return false;
  }

  let current: HTMLElement | null = element;
  while (current) {
    const style = window.getComputedStyle(current);
    if (
      current.hidden ||
      style.display === 'none' ||
      style.visibility === 'hidden' ||
      style.visibility === 'collapse'
    ) {
      return false;
    }
    current = current.parentElement;
  }

  return element.getClientRects().length > 0;
}

function getFocusTarget(element: HTMLElement) {
  if (isVisibleAndEnabled(element) && typeof element.focus === 'function') {
    return element;
  }

  const candidates = element.querySelectorAll<HTMLElement>(
    'input:not([type="hidden"]), select, textarea, button, a[href], [tabindex]:not([tabindex="-1"])'
  );

  return Array.from(candidates).find(
    (candidate) => isVisibleAndEnabled(candidate) && typeof candidate.focus === 'function'
  );
}

export function scrollToFirstVisibleInvalid(selector = DEFAULT_INVALID_SELECTOR) {
  if (typeof window === 'undefined' || typeof document === 'undefined') return;

  const scrollToInvalid = () => {
    const firstInvalid = Array.from(document.querySelectorAll<HTMLElement>(selector)).find(isVisibleAndEnabled);
    if (!firstInvalid) return;

    firstInvalid.scrollIntoView({ behavior: 'smooth', block: 'center' });

    const focusTarget = getFocusTarget(firstInvalid);
    if (!focusTarget) return;

    window.setTimeout(() => {
      try {
        focusTarget.focus({ preventScroll: true });
      } catch {
        focusTarget.focus();
      }
    }, 120);
  };

  window.setTimeout(() => {
    if (typeof window.requestAnimationFrame === 'function') {
      window.requestAnimationFrame(scrollToInvalid);
      return;
    }
    scrollToInvalid();
  }, 0);
}
