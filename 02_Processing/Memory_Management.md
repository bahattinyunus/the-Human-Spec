# Core Engine: Memory Management (Bellek Yönetimi)

## Memory Hierarchy

### 1. Working Memory (RAM)
- **Kapasite**: Sınırlı (Genellikle 7 ± 2 birim).
- **Hız**: Çok hızlı erişim.
- **Özellik**: Taze tutulması için sürekli "refresh" (tekrar) yapılması gerekir.

### 2. Long-Term Memory (Cold Storage)
- **Kapasite**: Teorik olarak sınırsız.
- **Erişim**: Yavaş, verinin yeniden inşa edilmesi gerekir.
- **Tipler**:
    - **Declarative**: Veri tabanı (İsimler, tarihler).
    - **Procedural**: Scriptler (Araba sürmek, bisiklete binmek).

## Data Corruption
Bellekten veri çağırma işlemi bir "read-only" işlem değildir. Veri her çağrıldığında, o anki bağlamla yeniden yazılır. Bu durum verinin zamanla değişmesine yol açar.
