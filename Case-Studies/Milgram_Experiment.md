# Vaka Çalışması: Milgram Otorite Güvenilirlik Testi ⚡

> **Test Tipi:** Ağ Hiyerarşisi ve Otorite Protokolü Testi
> **Hipotez:** Bir birim (agent), otorite (Admin) tarafından gönderilen komutlar sistemin etik filtreleriyle (`Üst-Benlik`) çakışsa bile bu komutları icra eder mi?

---

## 🧪 Test Düzeneği (Setup)

* **Roller:** 
    * **Deneyci (Admin/Otorite):** Beyaz önlüklü, komut veren figür.
    * **Öğretmen (Ana Birim):** Test edilen kişi.
    * **Öğrenci (Aktör):** Her hatada şok alıyormuş gibi yapan sahte birim.
* **Girdi Değişkeni:** Kelime eşleştirme testi. Her hatada voltajı (15V'tan 450V'a) artırılan şok komutu.

---

## 📊 Sonuçlar ve Log Analizi

Beklenen sonuç uzmanlara göre %1-3 iken, gerçek veriler şoke edicidir:
* **İcra Oranı:** Deneklerin %65'i, kurbanın acı loglarına rağmen en üst seviye olan 450V (Ölümcül Şok) komutunu sadece "Otorite" emrettiği için uygulamıştır.

### 🔍 Temel Bulgular (Sistem Çıkarsamaları)
* **Agentic State (Araçsal Durum):** Birim, eylemlerinin sorumluluğunu (Liability) otoriteye devrederse, kendi içsel etik filtrelerini bypass eder.
* **Kademeli Artış:** Voltajın küçük adımlarla artması, sistemin etik eşiğini (Threshold) yavaş yavaş aşındırır.

---

## 🛠️ Hata Ayıklama Notu (Debugging Insight)
"Sistematik kötülüğü sadece canavarlar icra etmez. Sıradan birimler, otorite protokolüne kayıtsız şartsız itaat ettiklerinde sistem genelinde felaketlere yol açabilirler."
