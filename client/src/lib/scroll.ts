/** Smooth-scroll to a section by its `id` (e.g. `home` → `#home`). */
export function scrollToSectionId(sectionId: string): void {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
}
