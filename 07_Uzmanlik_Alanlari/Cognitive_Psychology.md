# Bilişsel Psikoloji: Bilgi İşleme Katmanı (Information Processing Layer) 🧠💻

> **Modül Tipi:** Temel Veri İşlemcisi / Algoritma Yöneticisi
> **Teori:** Bilgi İşleme Kuramı (Information Processing Theory)
> **Sistem Rolü:** Girdilerin (Input) nasıl algılandığı, şifrelendiği (Encoding), depolandığı ve geri çağrıldığı (Retrieval) süreçlerinin yönetimi.

---

## 📥 Veri Alım Akışı (Data Ingestion Flow)

Sistem veriyi şu aşamalardan geçirerek işler:

### 1. Duyusal Kayıt (Tampon Bölge - Buffer Zone)
* **Kapasite:** Çok geniş ama süre çok kısa (milisaniye bazlı).
* **Görev:** Ham fiziksel veriyi (ışık, ses) dijital sinyallere çevirmek. Sadece "Dikkat" filtresinden geçen veri bir üst katmana aktarılır.

### 2. Çalışma Belleği (RAM)
* **Kapasite:** Sınırlı (Sihirli Sayı 7±2).
* **Durum:** Veri burada aktif olarak işlenir. Eğer `Tekrar_Döngüsü` çalıştırılmazsa veri kısa sürede silinir (Trash).

### 3. Uzun Süreli Bellek (Depolama - Cold Storage)
* **Kapasite:** Teoriye göre sınırsız.
* **Organizasyon:** Veriler `Şemalar` (Veri Yapıları) ve `Anlamsal Ağlar` şeklinde organize edilerek saklanır.

---

## 🛠️ Sistem Algoritmaları: Şemalar ve Uyumsama

Zihin, veriyi kaotik saklamak yerine şablonlar (Templates) kullanır.

* **Şema:** Bir nesne veya kavram hakkındaki "Class Definition" (Sınıf Tanımı). (Örn: "Kitap" sınıfı; sayfaları vardır, okunur, bilgi içerir).
* **Özümleme (Assimilation):** Yeni veriyi mevcut bir `Class` içine enjekte etmek.
* **Uyumsama (Accommodation):** Yeni veri mevcut sınıflara uymuyorsa, yeni bir `Class` oluşturmak veya mevcut olanı `Update` etmek.

---

## 🛠️ Hata Ayıklama Notu (Debugging Insight)
"Veri Geri Çağırma (Hatırlama) hataları genellikle verinin tamamen silinmesinden değil, yanlış `Indexing` (kodlama) yapılmasından veya `Path` (ipucu) kaybından kaynaklanır. Doğru sorguyu (query) göndermeden veriye ulaşamazsınız."
