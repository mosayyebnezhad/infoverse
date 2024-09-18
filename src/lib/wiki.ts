// const text = `
// {{Infobox noble house|
// |surname  = دودمان/خاندان ساسان
// |coat of arms  = [[پرونده:Senmurv.svg|230px]]
// |country  = {{flagicon image|Derafsh kaviani.svg}} [[شاهنشاهی ساسانی|ایران‌شهر]]
// |parent house   =
// |titles  = {{فهرست ناگلوله‌ای|
// * [[شاه (عنوان)|شاه]]
// * [[شاهنشاه]]
// * [[کی (عنوان)|کِی]]
// }}
// |founder  = [[اردشیر بابکان|اردشیر یکم]]
// |final ruler  = [[یزدگرد سوم]]
// |current head  =
// |founding year  = ۲۲۴ م
// |deposition  = ۶۵۱ م
// |religion  = [[مزدیسنا]]
// |ethnicity  =[[ایرانی]]
// |cadet branches = [[دودمان گاوباریان]]{{سخ}}[[بنو منجم]]{{سخ}}[[باوندیان]]{{سخ}}[[پادوسبانیان]]
// }}
// `;

// استخراج اطلاعات با استفاده از عبارات منظم


export const aafe = "goox"



export const wikioutpoter = (text:string) => { 

  const wikiConvertor = [...text.matchAll(/\|\s*(.*?)\s*=\s*(.*?)\n/g)].map(match => ({
    Attribute: match[1].trim(),
    Value: match[2].trim()
  }));


  return wikiConvertor;


}

// نمایش داده‌ها به صورت جدولی
// console.table(info);
