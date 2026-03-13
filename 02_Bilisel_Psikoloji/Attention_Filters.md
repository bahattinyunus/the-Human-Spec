# Core Engine: Attention Filters (Veri Giriş Filtreleri)

## Input Management
Sistem, çevreden gelen devasa veri akışını yönetmek için filtreler kullanır. Hangi verinin CPU'ya (bilinç) ulaşacağını bu filtreler belirler.

## Filter Types

### 1. Bottom-Up Filters (Interrupt Driven)
- **Mantık**: Beklenmedik, parlak, gürültülü veya tehlikeli veriler filtreyi delip CPU'yu durdurur.
- **Örnek**: Ani bir patlama sesi.

### 2. Top-Down Filters (Query Driven)
- **Mantık**: Mevcut hedeflere ve aramalara odaklanma.
- **Örnek**: Kalabalık bir odada sadece ismini duymaya çalışmak.

## Optimization Problems
- **Inattentional Blindness**: Filtreler o kadar güçlüdür ki, odak dışındaki devasa bir değişikliği bile gözden kaçırabilir.
- **Information Overload**: Filtreleme kapasitesinin aşılması durumunda sistem donabilir veya rastgele veri kayıpları yaşayabilir.
