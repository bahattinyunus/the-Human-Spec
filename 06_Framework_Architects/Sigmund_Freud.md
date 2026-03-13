# Sigmund Freud: The Legacy Kernel Architect 🎩

> **Modül Tipi:** Core System Kernel / Background Process Manager
> **Teori:** Psikanaliz (Psychodynamics)
> **Sistem Rolü:** Bilinçaltı süreçlerin (Unconscious) yönetimi ve temel itkilerin (ID) kernel düzeyinde kontrolü.

---

## 🏗️ Mimari Yapı: Üç Katmanlı Kernel

Freud'un modeli, sistemi üç ana katmana ayırır:

### 1. The ID (`/dev/raw_impulses`)
* **Fonksiyon:** Ham veri ve enerji kaynağı.
* **Algoritma:** Haz İlkesi (Pleasure Principle).
* **Durum:** Mantıksız, zamansız ve tamamen "istek" odaklı. Sistemin en alt katmanı.

### 2. The EGO (`/usr/bin/logic_and_reality`)
* **Fonksiyon:** Sistemin dış dünyayla etkileşime giren arayüzü.
* **Algoritma:** Gerçeklik İlkesi (Reality Principle).
* **Görev:** ID'nin ham isteklerini, Super-Ego'nun kısıtlamaları ve dış dünyanın gerçekliği arasında dengelemek (Dengeleyici modül).

### 3. The SUPER-EGO (`/etc/security/policies`)
* **Fonksiyon:** Güvenlik politikaları ve etik standartlar.
* **Kaynak:** Ebeveyn ve toplumsal "kod"ların içselleştirilmiş hali.
* **Eylem:** Hatalı davranışlarda `Guilt.service` üzerinden sistem uyarısı verir.

---

## 🛡️ Defense Mechanisms (Sistem Savunma Protokolleri)

Sistem bir `Anxiety` hatası aldığında, Ego otomatik olarak şu yamaları siber savunma olarak devreye sokar:

* **Repression (Bastırma):** Bozuk veri paketlerini bilinçaltı diskine (unconscious storage) kilitlemek.
* **Projection (Yansıtma):** Kendi içsel hata kodlarını başka bir sistemin hatasıymış gibi raporlamak.
* **Sublimation (Yüceltme):** Ham impulsları toplumsal olarak yararlı fonksiyonlara (art, work) "re-route" etmek.

---

## 🛠️ Debugging Insight
"Rüyalar, bilinçaltı sisteminin `dump` dosyalarıdır. Onları analiz etmek, root seviyesindeki sorunları anlamanızı sağlar."
