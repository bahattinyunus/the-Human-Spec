# Abraham Maslow: Kaynak Planlama Mühendisi (Priority Scheduling Engineer) 📈

> **Modül Tipi:** Kaynak Tahsis Yöneticisi / Sistem Yaşam Döngüsü Planlayıcısı
> **Teori:** İnsancıl Psikoloji (Humanistic Psychology)
> **Sistem Rolü:** Sistemin enerji ve kaynaklarını hangi öncelik sırasına göre dağıtacağını belirleyen ana planlayıcı.

---

## 📊 İhtiyaçlar Hiyerarşisi (Kaynak Öncelik Piramidi)

Sistem, alt katmanlardaki bağımlılıklar (dependencies) çözülmeden üst katmanlardaki "Kendini Gerçekleştirme" fonksiyonunu çalıştıramaz.

### 1. Fizyolojik Katman (L1) `/dev/biyo_hayatta_kalma`
* **Gereksinim:** Güç kaynağı (besin), soğutma (uyku), temel bakım.
* **Durum:** Bu katman `Null` değer döndürürse sistem doğrudan kapanmaya (`Critical Failure`) gider.

### 2. Güvenlik Katmanı (L2) `/etc/guvenlik`
* **Gereksinim:** Barınak, stabilite, geleceği öngörülebilirlik (Predictability/Stability).

### 3. Sosyal Ağ Katmanı (L3) `/var/log/ait_olma`
* **Gereksinim:** Diğer birimlerle (agents) veri alışverişi, grup üyeliği ve kabul.

### 4. Saygınlık Katmanı (L4) `/usr/bin/durum_denetimi`
* **Gereksinim:** Başarı sinyalleri, toplumsal onay ve sistem yetkinliği.

### 5. Kendini Gerçekleştirme (L5) `master_system_actualization.exe`
* **Gereksinim:** Potansiyelin tam kapasite kullanılması, yaratıcılık, otonomi ve problem çözme.

---

## ⚠️ Kaynak Yetersizliği (Resource Deprivation)

Eğer L1 veya L2'de bir `Kaynak_Çatışması` yaşanırsa, sistem otomatik olarak üst katmanlardaki işlemleri "suspend" (askıya al) durumuna getirir. Aç bir sistemde `Yaratıcılık.exe` stabil çalışmaz.

---

## 🛠️ Hata Ayıklama Notu (Debugging Insight)
"Bir birim sadece ekmekle yaşamaz, ama eğer hiç ekmeği yoksa, tüm işlemci gücünü sadece ekmek bulmaya ayırır. Sistemin hedeflerini analiz ederken hangi katmanda darboğaz (bottleneck) olduğunu kontrol edin."
