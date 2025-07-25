document.addEventListener('DOMContentLoaded', () => {

    // ====================================================================
    // KONFIGURASI PUSAT (HARGA, NAMA, LIMIT)
    // ====================================================================
    const itemConfig = {
        'story1': { name: 'Story Utama (7DS) Chapter 1-12', price: 8000 },
        'story2': { name: 'Story Utama (7DS) Chapter 13-30', price: 7000 },
        'story3': { name: 'Story Utama (4KOA) Prolog-End', price: 7000 },
        'story4': { name: 'Story Tambahan (Village) Chapter 1-6', price: 8000 },
        'story5': { name: 'Story Tambahan (Ragnarok) Chapter 1-4', price: 8000 },
        'story6': { name: 'Story Tambahan (Ragnarok) Chapter 5-8', price: 7000 },
        'story7': { name: 'Story Tambahan (Sacrifice & Film) Chapter 1-End', price: 7000 },
        'season1': { name: 'Hero Arena', price: 10000 },
        'season2': { name: 'Labyrinth', price: 40000 },
        'season3': { name: 'Liones Defensive War', price: 30000 },
        'season4': { name: 'Final Boss', price: 45000 },
        'pvp1': { name: 'PvP Bronze', price: 1000 },
        'pvp2': { name: 'PvP Silver', price: 2000 },
        'pvp3': { name: 'PvP Gold', price: 3000 },
        'pvp4': { name: 'PvP Platinum', price: 4000 },
        'pvp5': { name: 'PvP Master', price: 8000 },
        'pvp6': { name: 'PvP Champion', price: 15000 },
        'rawat1': { name: 'Rawat Monthly Reguler', price: 100000 },
        'rawat2': { name: 'Rawat Monthly VIP', price: 300000 },
        'rawat3': { name: 'Rawat Weekly Reguler', price: 42000 },
        'rawat4': { name: 'Rawat Weekly VIP', price: 100000 },
        'rawat5': { name: 'Rawat Daily Reguler', price: 5000 },
        'farm1': { name: 'Farm Gold (Garansi 100m)', price: 40000 },
        'farm2': { name: 'Farm Exp Pot', price: 35000 },
        'farm3': { name: 'Farm Buku', price: 35000 },
        'farm4': { name: 'Farm SA Coin', price: 6000 }
    };

    // ====================================================================
    // ELEMEN DOM
    // ====================================================================
    const orderForm = document.getElementById('orderForm');
    const daftarPesananEl = document.getElementById('daftar-pesanan');
    const totalHargaEl = document.getElementById('total-harga');
    const detailPesananHiddenEl = document.getElementById('detail_pesanan_hidden');
    const totalHargaHiddenEl = document.getElementById('total_harga_hidden');
    const inputNama = document.getElementById('inputNama');
    const inputNoWa = document.getElementById('inputNoWa');
    const inputServer = document.getElementById('inputServer');
    const dataDiriNotification = document.getElementById('dataDiriNotification');

    // ====================================================================
    // FUNGSI-FUNGSI
    // ====================================================================

    // Fungsi untuk mengecek apakah data diri sudah diisi
    function isDataDiriFilled() {
        return inputNama.value.trim() !== '' &&
               inputNoWa.value.trim() !== '' &&
               inputServer.value.trim() !== '';
    }

    // Fungsi untuk menampilkan notifikasi bubble
    function showNotification(message) {
        dataDiriNotification.textContent = message;
        dataDiriNotification.classList.add('show');
        setTimeout(() => {
            dataDiriNotification.classList.remove('show');
        }, 3000); // Notifikasi akan hilang setelah 3 detik
    }
    
    // Fungsi bantuan untuk format mata uang
    function formatRupiah(angka) {
        return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(angka);
    }

    // Fungsi utama untuk memperbarui keranjang
    function updateKeranjang() {
        const checkboxes = document.querySelectorAll('#orderForm input[type="checkbox"]');
        let totalHarga = 0;
        let detailPesananText = '';
        daftarPesananEl.innerHTML = ''; 

        checkboxes.forEach(checkbox => {
            if (checkbox.checked) {
                const itemId = checkbox.id;
                const config = itemConfig[itemId];
                
                if (!config) return; // Lewati jika item tidak ada di config

                let kuantitas = 1;
                const inputKuantitas = document.querySelector(`input[type="number"][data-for="${itemId}"]`);
                
                if (inputKuantitas) {
                    kuantitas = parseInt(inputKuantitas.value) || 0;
                    if (kuantitas <= 0) {
                        return; // Jangan tampilkan item jika kuantitas 0
                    }
                }

                const subtotal = config.price * kuantitas;
                totalHarga += subtotal;

                // Tampilkan di keranjang visual
                const li = document.createElement('li');
                let itemText = config.name;
                if (inputKuantitas && kuantitas >= 1) { // Tampilkan kuantitas jika ada
                    itemText += ` x ${kuantitas}`;
                }
                itemText += ` = ${formatRupiah(subtotal)}`;
                li.textContent = itemText;
                daftarPesananEl.appendChild(li);

                // Siapkan teks untuk dikirim ke Netlify
                detailPesananText += `${itemText}\n`;
            }
        });

        if (daftarPesananEl.children.length === 0) {
            daftarPesananEl.innerHTML = '<li>Belum ada item yang dipilih.</li>';
        }

        // Update total harga dan field tersembunyi
        totalHargaEl.textContent = formatRupiah(totalHarga);
        detailPesananHiddenEl.value = detailPesananText.trim() === '' ? 'Tidak ada pesanan detail.' : detailPesananText;
        totalHargaHiddenEl.value = totalHarga;
    }

    // ====================================================================
    // EVENT LISTENERS
    // ====================================================================

    // Event listener untuk checkbox
    document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
        checkbox.addEventListener('change', (event) => {
            const inputKuantitas = document.querySelector(`input[type="number"][data-for="${event.target.id}"]`);
            
            if (!isDataDiriFilled() && event.target.checked) {
                event.target.checked = false; // Batalkan centang
                if (inputKuantitas) {
                    inputKuantitas.disabled = true;
                    inputKuantitas.value = 0;
                }
                showNotification('Harap isi data diri (Nama, No. WhatsApp, Server) terlebih dahulu!');
                return;
            }

            if (inputKuantitas) {
                if (event.target.checked) {
                    inputKuantitas.disabled = false;
                    inputKuantitas.value = 1;
                } else {
                    inputKuantitas.disabled = true;
                    inputKuantitas.value = 0;
                }
            }
            updateKeranjang();
        });
    });
    
    // Event listener untuk semua input number
    document.querySelectorAll('input[type="number"]').forEach(inputNum => {
        inputNum.addEventListener('input', (event) => {
            const max = parseInt(event.target.max);
            let value = parseInt(event.target.value);
            
            if(isNaN(value)) {
                value = 0;
            }

            if (max && value > max) {
                event.target.value = max; // Batasi nilai ke max jika melebihi
                showNotification(`Jumlah maksimal untuk item ini adalah ${max}.`);
            }
            
            if (value <= 0) {
                event.target.value = 0;
                const checkbox = document.getElementById(event.target.dataset.for);
                if(checkbox){
                    checkbox.checked = false;
                    event.target.disabled = true;
                }
            }

            updateKeranjang();
        });
    });

    // Event listener untuk tombol submit
    orderForm.addEventListener('submit', function(event) {
        if (!isDataDiriFilled()) {
            event.preventDefault();
            showNotification('Harap isi data diri (Nama, No. WhatsApp, Server) terlebih dahulu!');
        } else if (totalHargaHiddenEl.value <= 0) {
            event.preventDefault();
            showNotification('Keranjang Anda masih kosong. Silakan pilih item terlebih dahulu.');
        }
    });

    // Panggil updateKeranjang saat halaman pertama kali dimuat untuk inisialisasi
    updateKeranjang();
});
