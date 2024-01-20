// New Date
const currentDate = new Date();
  console.log("Current Date :",currentDate);

  // Date parsed
  let dateParsed = Date.parse("june 10, 2001");
  console.log('parse',dateParsed)

// Date.UTC()

const utcDate = Date.UTC(2020, 2, 30);
 console.log('UTC Date:', new Date(utcDate));

 // 4. getDate()
const getDate = new Date().getDate();
console.log('Date :',getDate);

// 5. getMonth()
const getMonth = new Date().getMonth();
 console.log('Month :',getMonth);

// 6. getFullYear()
const getFullYear = new Date().getFullYear();
 console.log('Year :',getFullYear);


// 7. getDay()
const getDay = new Date().getDay();
 console.log('Day :',getDay);

// 8. getHours()
const getHours = new Date().getHours();
 console.log('Hour :',getHours);

 // 9. getMinutes()
const getMinutes = new Date().getMinutes();
 console.log('Minutes :',getMinutes);

 // 10. getSeconds()
const getSeconds = new Date().getSeconds();
 console.log('Seconds :',getSeconds);

 // 11. getMilliSeconds()
const getMilliSeconds = new Date().getMilliseconds();
 console.log('MilliSeconds :',getMilliSeconds); 

// 12.setDate
const setDate = new Date("July 21, 1983 01:15:00");
console.log(new Date(setDate));

 // 13.setMonth()
 const setMonth = new Date().setMonth(8);
 console.log('Updated Month :',new Date(setMonth));

 // 14.setFullYear()
const setFullYear = new Date().setFullYear(2010);
 console.log('Updated Year :',new Date(setFullYear));

 // 15.setHours()
const setHours = new Date().setHours(50);
 console.log('Updated Hours :',new Date(setHours));

 // 16.setMinutes()
const setMinutes = new Date().setMinutes(30);
 console.log('Updated Minutes :',new Date(setMinutes));

 // 17.setSeconds()
const setSeconds = new Date().setSeconds(60);
 console.log('Updated Seconds :',new Date(setSeconds));

 // 18.setMilliseconds()
const setMilliSeconds = new Date().setMilliseconds(5);
 console.log('Updated MilliSeconds :',new Date(setMilliSeconds));

// 19.toDateString()
const dateString = new Date().toDateString();
 console.log('Date String :', dateString);

// 20.toLocalDateString()
const localeDateString = new Date().toLocaleDateString();
 console.log('Locale Date String :', localeDateString);

// 21.toTimeString()
const timeString = new Date().toTimeString();
 console.log('Time String:', timeString);

 // 22.toLocaleTimeString()
const localeTimeString = new Date().toLocaleTimeString();
 console.log('Locale Time String :',localeTimeString);

 // 23.getUTCdate()  

const uTcDate = new Date().getUTCDate();
console.log('UTC Date :',uTcDate);

// 24.getUTCday()
const utcDay = new Date().getUTCDay();
console.log('UTC Day :',utcDay);

// 25.getUTCfullYears()
const utcFullYear = new Date().getUTCFullYear();
console.log('UTC FullYear :', utcFullYear); 

// 26.getUTChours()
const utcHours = new Date().getUTCHours();
console.log('UTC Hours :',utcHours); 

// 27.getUTCminutes()
const utcMinutes = new Date().getUTCMinutes();
console.log('UTC Minutes :',utcMinutes); 

// 28.getUTCseconds()
const utcSeconds = new Date().getUTCSeconds();
console.log('UTC Seconds :',utcSeconds); 

// 29.getUTCmilliSeconds()
const utcMilliSeconds = new Date().getUTCMilliseconds();
console.log('UTC MilliSeconds :',utcMilliSeconds);

// 30.setUTCdate()
const setUtcDate = new Date().setUTCDate(3);
console.log('Updated UTC Date:',new Date(setUtcDate)); 

// 31.setUTCMonth()
const stutcMonth = new Date().setUTCMonth(6);
console.log('Updated Date:',new Date(stutcMonth));

// 32.setUTCfullYear()
const setUtcFullYear = new Date().setUTCFullYear(2000);
console.log('Updated UTC Year :',new Date(setUtcFullYear));

// 33.setUTCHours()
const setUtcHours = new Date().setUTCHours(5);
console.log('Updated UTC Hours :',new Date(setUtcHours));

// 34.setUTCminutes()
const setUtcMinutes = new Date().setUTCMinutes(3);
console.log('Updated Date:',new Date(setUtcMinutes)); 

// 35.setUTCseconds()
const setUtcSeconds = new Date().setUTCSeconds(45)
console.log('Updated UTC Seconds :',new Date(setUtcSeconds));

// 36.setUTCmilliSeconds()
const setUtcMilliSeconds = new Date().setUTCMilliseconds(234);
console.log('Updated UTC MilliSeconds :',new Date(setUtcMilliSeconds));
