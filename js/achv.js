// Menampilkan placeholder otomatis kalau file foto belum ada.
// Begitu foto dengan nama yang sesuai diupload ke folder images/achievements/,
// foto akan otomatis tampil menggantikan placeholder ini.
function handleImgError(img) {
  const slot = img.closest('.photo-slot');
  if (!slot) return;
  slot.classList.add('missing');
  const label = document.createElement('span');
  label.className = 'missing-label';
  label.textContent = slot.dataset.label || 'Foto belum ditambahkan';
  img.remove();
  slot.appendChild(label);
}
