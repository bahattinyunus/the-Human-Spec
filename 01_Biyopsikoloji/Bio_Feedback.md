# Hardware Layer: Bio-Feedback (Sistem Durum Raporları)

## Telemetry Data
Vücut, zihne sürekli olarak "error log" ve "status update" gönderir. Bu verileri doğru okumak, sistem stabilitesi için kritiktir.

## Sensor Outputs

### 1. Heart Rate (Sistem Yükü)
- **Analiz**: Yükselen nabız, genellikle işlem yükünün veya güvenlik (tehdit) modunun arttığını gösterir.

### 2. Cortisol Levels (Stress Stress Load)
- **Analiz**: Yüksek kortizol, sistemin uzun süreli acil durum modunda kaldığını ve donanım aşınmasının başladığını gösterir.

### 3. Muscle Tension (Sistem Hazırlığı)
- **Analiz**: Belirli kas gruplarındaki gerilim, bastırılmış `interrupt` sinyallerine işaret edebilir.

## Debugging Techniques
`Vagus Nerve` uyarımı gibi teknikler, donanım seviyesinde zorunlu bir `reboot` veya sakinleştirme komutu gönderebilir.
