import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatphone',
  standalone: true,
})
export class FormatphonePipe implements PipeTransform {
  // value: bu pipe'dan oldin kelgan ma'lumot (telefon raqam)
  transform(value: string | number): string {
    if (!value) return '';

    const strObj = String(value);

    // Oddiy logika: Agar 12 ta raqam bo'lsa, chiroyli qilamiz
    // Kiritildi: 998901234567
    // Kutilmoqda: +998 (90) 123-45-67

    if (strObj.length === 12) {
      const country = strObj.substring(0, 3); // 998
      const code = strObj.substring(3, 5); // 90
      const p1 = strObj.substring(5, 8); // 123
      const p2 = strObj.substring(8, 10); // 45
      const p3 = strObj.substring(10, 12); // 67

      return `+${country} (${code}) ${p1}-${p2}-${p3}`;
    }

    return strObj; // Agar format to'g'ri kelmasa, o'zini qaytarib yuboramiz
  }
}
