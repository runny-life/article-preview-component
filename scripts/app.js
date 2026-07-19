// Элементы
const toggleButton = document.querySelector("[data-js-toggle-button]");
const closeButton = document.querySelector("[data-js-close-button]");
const modal = document.querySelector("[data-js-modal]");

// Защита от отсутствия элементов
if (!toggleButton || !closeButton || !modal) {
  console.warn("Modal elements not found – check your selectors.");
}

/**
 * Синхронизирует aria-expanded с реальным состоянием модального окна.
 */
function updateAriaExpanded() {
  if (toggleButton) {
    toggleButton.setAttribute("aria-expanded", modal?.open ? "true" : "false");
  }
}

// Обновляем атрибут при любом закрытии
modal?.addEventListener("close", updateAriaExpanded);
modal?.addEventListener("cancel", updateAriaExpanded);

// Переключение по основной кнопке
toggleButton?.addEventListener("click", () => {
  if (modal?.open) {
    modal.close();
  } else {
    modal?.show();
    updateAriaExpanded();
  }
});

// Закрытие по кнопке «Закрыть»
closeButton?.addEventListener("click", () => {
  modal?.close();
});
