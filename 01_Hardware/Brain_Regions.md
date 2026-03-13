# Hardware Layer: Brain Regions (Fiziksel Modüller)

## Module Analysis

### 1. Prefrontal Cortex (Main CPU / Mantık Merkezi)
- **Görev**: Üst düzey karar alma, planlama ve çalışma belleği.
- **Özellik**: Sistemin en gelişmiş, ancak en çok enerji tüketen modülüdür.
- **Error Condition**: Duygusal aşırı yüklenme durumunda "prefrontal kapanma" (bypass).

### 2. Amygdala (Security / Firewall)
- **Görev**: Tehdit algılama ve acil durum protokollerini başlatma.
- **Özellik**: Mantık merkezinden daha hızlıdır ancak "false positive" oranları yüksektir.
- **Interrupt**: Tehdit algılandığında tüm CPU işlemlerini durdurup `Fight-or-Flight` moduna geçer.

### 3. Hippocampus (Data Storage Manager)
- **Görev**: Kısa süreli verilerin uzun süreli depolamaya aktarılması.
- **Özellik**: İndeksleme ve mekansal navigasyon verilerini yönetir.

## Architecture Guidelines
Donanım modülleri arasındaki bağlantı hızı (beyaz cevher bütünlüğü), sistemin genel işlem kapasitesini belirler.
