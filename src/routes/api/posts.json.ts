const posts = [
  {
    "_id": {
      "$oid": "609b4271adf71824e487efbf"
    },
    "ลำดับ": "48",
    "tag": "Dashboard",
    "url": "https://peaportal.pea.co.th/portal/apps/opsdashboard/index.html#/b972d68c9c0a4a7e8909d5e8ddfe7afa",
    "name": "PEA Communication Wire Improvement (CWI) Dashboard Version 3",
    "details": "PEA Communication Wire Improvement (CWI) Dashboard Version 3 จัดระเบียบการจัดสาย"
  },
  {
    "_id": {
      "$oid": "609b4271adf71824e487ef90"
    },
    "tag": "หน่วยงาน",
    "url": "www.pea.co.th",
    "name": "เว็บไซต์อินเตอร์เน็ต กฟภ.",
    "details": "ช่องทางการชำระค่าไฟฟ้า, ประกาศดับไฟ,  ประกาศจัดซื้อจัดจ้าง, ข่าวรับสมัครงาน, PEA e-Service, สอบถามประวัติการใช้ไฟ, การคืนเงินประกันการใช้ไฟ, ติดต่อ กฟภ.",
    "id": "1"
  },
  {
    "_id": {
      "$oid": "609b4271adf71824e487ef9d"
    },
    "ลำดับ": "14",
    "tag": "เว็บ/แอพ ระบบงาน",
    "url": "https://smr.pea.co.th   ",
    "name": "เว็บไซต์ระบบจดหน่วยผู้ใช้ไฟฟ้ารายใหญ่ที่ไม่ใช่มิเตอร์ AMR",
    "details": "ติดตามผลการอ่านและยืนยันผลการอ่านหน่วย, ส่งข้อมูลระบบบริหารจัดการข้อมูลจดหน่วยบน e-Form, ตรวจสอบ/แก้ไขและยืนยันผลการอ่านหน่วย,ส่งข้อมูลการอ่านหน่วยวางบน FTP SAP เพื่อนำไปประมวลผลบิล"
  },
  {
    "_id": {
      "$oid": "609b4271adf71824e487ef96"
    },
    "ลำดับ": "7",
    "tag": "เกี่ยวกับพนักงาน/หน่วยงาน",
    "url": "http://www.peacoop.or.th/",
    "name": "เว็บไซต์สหกรณ์ออมทรัพย์ กฟภ.",
    "details": "เกี่ยวกับสหกรณ์ , ระเบียบข้อบังคับ, สวัสดิการสมาชิก, บริการสหกรณ์, คำถามที่พบบ่อย,ติดต่อสหกรณ์"
  },
  {
    "_id": {
      "$oid": "609b4271adf71824e487efb0"
    },
    "ลำดับ": "33",
    "tag": "Dashboard",
    "url": "http://dashboard.pea.co.th/",
    "name": "PEA DASHBOARD HUB",
    "details": "Dashboard สำนัก, สายงานต่างๆ , สายงานการไฟฟ้า ภาค 1-4 , "
  },
  {
    "_id": {
      "$oid": "609b4271adf71824e487ef99"
    },
    "ลำดับ": "10",
    "tag": "เว็บ/แอพ ระบบงาน",
    "url": "https://dmsxupload.pea.co.th/ETSx/Auth/Login  ",
    "name": "เว็บไซต์ระบบติดตามหนี้ค่าไฟฟ้าค้างชำระ ETSx",
    "details": "ผู้ใช้ไฟฟ้าค้างชำระ, ค้นหาหนี้ค่าไฟฟ้าค้างชำระ, ข้อมูลการฟื้นฟูกิจการ, รายงาน, สรุปยอดการส่ง ผกม. กอก. พิจารณาดำเนินคดี, สรุปยอดการส่ง สชก.(บก.-กม.) พิจารณาอนุมัติดำเนินคดี, คู่มือการใช้งาน"
  },
  {
    "_id": {
      "$oid": "609b4271adf71824e487ef93"
    },
    "ลำดับ": "4",
    "tag": "เว็บ/แอพ ระบบงาน",
    "url": "http://strms.pea.co.th/start/home_start.php",
    "name": "เว็บไซต์ ระบบการรายงานและติดตามประเมินผล การไฟฟ้าโปร่งใสอย่างยั่งยืน กฟภ. ปี 2564",
    "details": "การไฟฟ้าโปร่งใส ,ฝ่ายงานผู้ว่าการ,สำนักดิจิทัล, สำนักงานตรวจสอบภายใน, สายงาน"
  },
  {
    "_id": {
      "$oid": "609b4271adf71824e487ef9c"
    },
    "ลำดับ": "13",
    "tag": "เว็บ/แอพ ระบบงาน",
    "url": "https://simp-peadashboard.web.app/#/login",
    "name": "เว็บไซต์ระบบบริหารจัดการพัสดุ",
    "details": "วางแผนกพัสดุคงคลัง ประเทศไทย, พัสดุคงคลัง ประเทศไทย"
  },
  {
    "_id": {
      "$oid": "609b4271adf71824e487ef92"
    },
    "ลำดับ": "3",
    "tag": "หน่วยงาน",
    "url": "http://intra.pea.co.th/peas3",
    "name": "เว็บไซต์อินทราเน็ต กฟต.3 ยะลา",
    "details": "แจ้งข่าวสารภายใน,  แนะนำองค์กร, สังกัด กฟต.3, ข้อมูลพนักงาน ต.3, ข้อมูลสำคัญ ต.3, การไฟฟ้าโปร่งใส, สำนักงานสีเขียว,  ค้นหาข้อมูลพนักงาน , ระบบสารบรรณ, Pealife, ระบบบริหารจัดการทรัพย์สิน, Dashboard peas3, SMR, รวมระบบงานในองค์กร"
  },
  {
    "_id": {
      "$oid": "609b4271adf71824e487efbd"
    },
    "ลำดับ": "46",
    "tag": "อรรถประโยชน์ อื่นๆ ",
    "url": "https://www.pea.co.th/webApplications/tender_bid/Show/PublicSearchData.aspx",
    "name": "ระบบควบคุมการจัดซื้อจัดจ้าง กฟภ.",
    "details": "ระบบควบคุมการจัดซื้อจัดจ้าง กฟภ."
  },
  {
    "_id": {
      "$oid": "609b4271adf71824e487efc5"
    },
    "ลำดับ": "54",
    "tag": "Dashboard",
    "url": "https://datastudio.google.com/reporting/e0632873-99c5-4987-be35-6df975c0d9be/page/kSYQB",
    "name": "ติดตามปัญหาการขอรับคืน เงินประกันค่าไฟฟ้า CDP",
    "details": "ติดตามปัญหาการขอรับคืน เงินประกันค่าไฟฟ้า , ผู้ใช้ไฟลงทะเบียนขอคืนเงินประกัน, ผู้ใช้ไฟที่ได้รับเงินประกันคืนแล้ว, ผู้ใช้ไฟที่ยังไม่ได้รับเงินค่าประกันคืน"
  },
  {
    "_id": {
      "$oid": "609b4271adf71824e487ef94"
    },
    "ลำดับ": "5",
    "tag": "เว็บ/แอพ ระบบงาน",
    "url": "http://strms.pea.co.th/s3/2564/tprS3-64/home.php",
    "name": "เว็บไซต์ ระบบการรายงานและติดตามประเมินผล การไฟฟ้าโปร่งใสอย่างยั่งยืน กฟต.3 ปี 2564",
    "details": "กฟต.3, รวมทุก กฟฟ. สังกัด กฟต.3 , กฟจ.ยะลา, กฟอ.เบตง, กฟจ.ปัตตานี, กฟจ.นราธิวาส, กฟอ.สุไหงโก-ลก, กฟจ.สตูล, กฟจ.พัทลุง, กฟจ.สงขลา, กฟอ.จะนะ, กฟอ.หาดใหญ่, กฟอ.สะเดา, กฟอ.ระโนด และกฟฟ.ในสังกัด"
  },
  {
    "_id": {
      "$oid": "609b4271adf71824e487efa2"
    },
    "ลำดับ": "19",
    "tag": "อรรถประโยชน์ อื่นๆ ",
    "url": "http://mpf.pea.co.th",
    "name": "ระบบ  Manage PDF Files",
    "details": "แปลงไฟล์ เป็น PDF , แยกและรวมไฟล์ PDF, ดูและแก้ไขไฟล์ PDF, แปลงไฟล์ JPG, TIFF, PNG , ล็อกและปลดล็อค PDF"
  },
  {
    "_id": {
      "$oid": "609b4271adf71824e487efc9"
    },
    "ลำดับ": "58",
    "tag": "อรรถประโยชน์ อื่นๆ ",
    "url": "https://drive.google.com/drive/folders/1CUZBViRqAxZXwAA9EQcw3QwGvzSHr9y5",
    "name": "โปรแกรมลายเซ็นอิเล็กทรอนิกส์",
    "details": "ชุดติดตั้งโปรแกรม PEASign"
  },
  {
    "_id": {
      "$oid": "609b4271adf71824e487efcc"
    },
    "ลำดับ": "61",
    "tag": "อรรถประโยชน์ อื่นๆ ",
    "url": "http://intra.pea.co.th/dpsg/GISP3/",
    "name": "PEA GIS",
    "details": "แผนงานพัฒนาสารสนเทศระบบไฟฟ้าทางภูมิศาสตร์ระยะที่ 3"
  },
  {
    "_id": {
      "$oid": "609b4271adf71824e487efcf"
    },
    "ลำดับ": "64",
    "tag": "อรรถประโยชน์ อื่นๆ /เกี่ยวกับพนักงาน",
    "url": "https://emailsalaryslip.pea.co.th/",
    "name": "PEA (Email) E-SLIP",
    "details": "สลิปเงินเดือนพนักงาน กฟภ."
  },
  {
    "_id": {
      "$oid": "609b4271adf71824e487efd7"
    },
    "ลำดับ": "72",
    "tag": "เว็บ/แอพ ระบบงาน",
    "url": "http://isu.pea.co.th/registerid/",
    "name": "ระบบจัดการข้อมูลเพื่อขอใช้สิทธิเข้าถึงฐานข้อมูลทะเบียนราษฎร์",
    "details": "เพื่อจัดเก็บข้อมูลพนักงาน/ลูกจ้างของ PEA ที่ได้รับมอบหมายให้ทำหน้าที่ในการให้บริการผู้ใช้ไฟฟ้า ซึ่งต้องเชื่อมโยงข้อมูลระบบทะเบียนราษฎร์ โดยเฉพาะเลขบัตรประชาชน 13 หลัก นำส่งให้สำนักทะเบียนราษฎร์ กรมการปกครอง สำหรับกำหนดสิทธิการเข้าใช้งานฐานข้อมูลทะเบียนราษฎร์ ตามข้อตกลงระหว่าง PEA และ สำนักทะเบียนราษฎร์ กรมการปกครอง"
  },
  {
    "_id": {
      "$oid": "609b4271adf71824e487ef9b"
    },
    "ลำดับ": "12",
    "tag": "Dashboard",
    "url": "https://sites.google.com/view/s3-pms/home",
    "name": "เว็บไซต์ Dashboard Peas3",
    "details": "Dashboard ผลการปฏิบัติงาน (KPI), แผนปฏิบัติประจำปี, เรื่องติดตามและข้อสั่งการ "
  },
  {
    "_id": {
      "$oid": "609b4271adf71824e487ef9e"
    },
    "ลำดับ": "15",
    "tag": "เว็บ/แอพ ระบบงาน",
    "url": "http://cdp.pea.co.th/",
    "name": "เว็บไซต์ลงทะเบียน/ตรวจสอบ การขอคืนเงินประกันการใช้ไฟฟ้า",
    "details": "ลงทะเบียนการขอคืนเงินประกันการใช้ไฟฟ้า"
  },
  {
    "_id": {
      "$oid": "609b4271adf71824e487efad"
    },
    "ลำดับ": "30",
    "tag": "อรรถประโยชน์ อื่นๆ /เกี่ยวกับพนักงาน",
    "url": "http://idp.pea.co.th/idp2020/",
    "name": "ระบบจัดทำแผนพัฒนาบุคลากรรายบุคคล (IDP)",
    "details": "ระบบจัดทำแผนพัฒนาบุคลากรรายบุคคล (IDP)"
  },
  {
    "_id": {
      "$oid": "609b4271adf71824e487ef98"
    },
    "ลำดับ": "9",
    "tag": "อรรถประโยชน์ อื่นๆ ",
    "url": "http://bct.pea.co.th/youtube",
    "name": "เว็บไซต์ คลังความรู้ กฟต.3 ",
    "details": "โหลดข้อมูลไฟล์ วีดีโอเข้า Youtube, VDO ระบบบริการลูกค้าอัจฉริยะ, OBS, Pea Smart Plus"
  },
  {
    "_id": {
      "$oid": "609b4271adf71824e487efaf"
    },
    "ลำดับ": "32",
    "tag": "เกี่ยวกับพนักงาน/อรรถประโยชน์ อื่นๆ ",
    "url": "http://smilefeedback.pea.co.th/QueueReportEvaluate.aspx ",
    "name": "Mail PEA",
    "details": "พนักงานทุกคนจะมี E-mail องค์กร"
  },
  {
    "_id": {
      "$oid": "609b4271adf71824e487efb8"
    },
    "ลำดับ": "41",
    "tag": "อรรถประโยชน์ อื่นๆ ",
    "url": "http://transparency.pea.co.th/tpr",
    "name": "ทะเบียนควบคุมคู่ค้า/คู่ความร่วมมือ ",
    "details": "ทะเบียนควบคุมคู่ค้า/คู่ความร่วมมือ "
  },
  {
    "_id": {
      "$oid": "609b4271adf71824e487efc6"
    },
    "ลำดับ": "55",
    "tag": "Dashboard",
    "url": "https://datastudio.google.com/reporting/ed3c773d-342e-4f5a-aaf1-a420eb86408a/page/3mePB",
    "name": "ข้อมูลสับเปลี่ยนมิเตอร์อิเล็กทรอนิกส์ กฟอ.สายบุรี ประจำปี 2564",
    "details": "ข้อมูลสับเปลี่ยนมิเตอร์อิเล็กทรอนิกส์ กฟอ.สายบุรี ประจำปี 2564 , ข้อมูลสับเปลี่ยนมิเตอร์ในระบบ SAP ทั้งโครงการ กฟอ.สายบุรี"
  },
  {
    "_id": {
      "$oid": "609b4271adf71824e487efda"
    },
    "ลำดับ": "75",
    "tag": "Dashboard",
    "url": "https://app.powerbi.com/view?r=eyJrIjoiYzNlNzRlZWUtMDZlYy00MjRhLTkyZjctYTI5NzUwN2Y2MzA4IiwidCI6ImEyMzM5ZjZkLWJmNGEtNDRkYi04OGVjLWNiOGYyN2RhNGFiYiIsImMiOjEwfQ%3D%3D&pageName=ReportSection519b52343945c8a14dc0",
    "name": "สถิติการชำระค่าไฟฟ้าแต่ละช่องทาง",
    "details": "การชำระค่าไฟผ่านอินเตอร์เน็ต"
  },
  {
    "_id": {
      "$oid": "609b4271adf71824e487efa7"
    },
    "ลำดับ": "24",
    "tag": "เว็บ/แอพ ระบบงาน",
    "url": "https://etax.pea.co.th/#/login",
    "name": "ระบบภาษี และเอกสารธุรกรรมทางอิเล็กทรอนิกส์ ",
    "details": "E-Tax ระบบภาษี และเอกสารธุรกรรมทางอิเล็กทรอนิกส์ "
  },
  {
    "_id": {
      "$oid": "609b4271adf71824e487efc0"
    },
    "ลำดับ": "49",
    "tag": "Dashboard",
    "url": "http://gisdashboard.pea.co.th/",
    "name": "รายงานความก้าวหน้าผลการดำเนินการ Data Cleansing Phase Meter ระบบจำหน่ายแรงต่ำ",
    "details": "ความก้าวหน้าผลการดำเนินการ Data Cleansing Phase Meter ระบบจำหน่ายแรงต่ำ ,การนำข้อมูลและสถานะการเบิกจ่าย - 12 เขต"
  },
  {
    "_id": {
      "$oid": "609b4271adf71824e487efcb"
    },
    "ลำดับ": "60",
    "tag": "อรรถประโยชน์ อื่นๆ ",
    "url": "http://kms.pea.co.th/kms/?width_res=1920&height_res=1200",
    "name": "ระบบบริหารจัดการความรู้ (Knowledge Management System)",
    "details": "การจัดการองค์ความรู้ กฟภ. , ฐานข้อมูลสิ่งประดิษฐ์ กฟภ., องค์ความรู้ที่น่าสนใจ"
  },
  {
    "_id": {
      "$oid": "609b4271adf71824e487efd4"
    },
    "ลำดับ": "69",
    "tag": "เว็บ/แอพ ระบบงาน",
    "url": "https://dmsx.pea.co.th/ins/",
    "name": "ระบบแจ้งเตือนค่าไฟฟ้า (Insx)",
    "details": "หนังสือแจ้งเตือนค่าไฟฟ้า ก่อนถึงกำหนดการชำระค่าไฟ"
  },
  {
    "_id": {
      "$oid": "609b4271adf71824e487efd6"
    },
    "ลำดับ": "71",
    "tag": "เว็บ/แอพ ระบบงาน",
    "url": "http://scs.pea.co.th/",
    "name": "ระบบงานบริการลูกค้าอัจฉริยะ (Smart Customer service System (SCS) )",
    "details": "ระบบงานบริการลูกค้าอัจฉริยะ, รับคำร้อง SCS, สับเปลี่ยนมิเตอร์ปริมาณมาก, ตรวจสอบมิเตอร์, ขอรับคืนเงินค่าประกัน, จัดการลายเซ็นอิเล็กทรอนิกส์"
  },
  {
    "_id": {
      "$oid": "609b4271adf71824e487efa4"
    },
    "ลำดับ": "21",
    "tag": "อรรถประโยชน์ อื่นๆ ",
    "url": "https://epi.pea.co.th",
    "name": "ระบบค้นหาข้อมูลพนักงาน",
    "details": "ค้นหาข้อมูลสังกัดของพนักงาน กฟภ."
  },
  {
    "_id": {
      "$oid": "609b4271adf71824e487efab"
    },
    "ลำดับ": "28",
    "tag": "เว็บ/แอพ ระบบงาน",
    "url": "https://dmsx.pea.co.th/",
    "name": "ระบบงดจ่ายไฟ",
    "details": "ระงับการใช้ไฟฟ้า เนื่องจากค้างชำระค่าไฟ และเกินกำหนด"
  },
  {
    "_id": {
      "$oid": "609b4271adf71824e487efae"
    },
    "ลำดับ": "31",
    "tag": "อรรถประโยชน์ อื่นๆ ",
    "url": "http://smilefeedback.pea.co.th/BPMReport",
    "name": "รายงานสรุปการรับชำระเงิน",
    "details": "รายงานสรุปการรับชำระเงิน"
  },
  {
    "_id": {
      "$oid": "609b4271adf71824e487efb1"
    },
    "ลำดับ": "34",
    "tag": "เว็บ/แอพ ระบบงาน",
    "url": "http://172.28.1.3:8080/zcanr/",
    "name": " ระบบบริหารจัดการลูกหนี้",
    "details": "บริหารจัดการลูกหนี้ ค่าไฟฟ้า, ลูกหนี้หลังโอนหักเงินประกัน, ลูกหนี้อื่นๆ"
  },
  {
    "_id": {
      "$oid": "609b4271adf71824e487efbb"
    },
    "ลำดับ": "44",
    "tag": "อรรถประโยชน์ อื่นๆ ",
    "url": "http://transparency.pea.co.th/tfm",
    "name": "ระบบรายงานผลขยายเขตติดตั้งหม้อแปลงเฉพาะราย ",
    "details": "ระบบรายงานผลขยายเขตติดตั้งหม้อแปลงเฉพาะราย "
  },
  {
    "_id": {
      "$oid": "609b4271adf71824e487efd8"
    },
    "ลำดับ": "73",
    "tag": "หน่วยงาน",
    "url": "http://172.27.1.5/wordpress/",
    "name": "เว็บไซต์อินทราเน็ต กฟต.2  นครศรีธรรมราช",
    "details": "ข่าวประชาสัมพันธ์, กฟฟ.สังกัด ต.2, ข้อมูลสำคัญ, หมายเลขโทรศัพท์ภายในเขต ต.2"
  },
  {
    "_id": {
      "$oid": "609b4271adf71824e487ef95"
    },
    "ลำดับ": "6",
    "tag": "เว็บ/แอพ ระบบงาน",
    "url": "http://greenoffice.pea.co.th/2564/",
    "name": "เว็บไซต์ สำนักงานสีเขียว กฟต.3 ประจำปี 2564 ",
    "details": "กฟต.3, รวมทุก กฟฟ. สังกัด กฟต.3 , กฟจ.ยะลา, กฟอ.เบตง, กฟจ.ปัตตานี, กฟจ.นราธิวาส, กฟอ.สุไหงโก-ลก, กฟจ.สตูล, กฟจ.พัทลุง, กฟจ.สงขลา, กฟอ.จะนะ, กฟอ.หาดใหญ่, กฟอ.สะเดา, กฟอ.ระโนด และกฟฟ.ในสังกัด"
  },
  {
    "_id": {
      "$oid": "609b4271adf71824e487ef9f"
    },
    "ลำดับ": "16",
    "tag": "อรรถประโยชน์ อื่นๆ ",
    "url": "Page facebook",
    "name": "PEA Governor LIVE",
    "details": "เพจใช้ในการสื่อสารข้อมูลระหว่างพนักงาน กฟภ. และ ผู้ว่าการ สะดวก รวดเร็ว เข้าถึงพนักงานทุกระดับชั้น "
  },
  {
    "_id": {
      "$oid": "609b4271adf71824e487efa1"
    },
    "ลำดับ": "18",
    "tag": "อรรถประโยชน์ อื่นๆ ",
    "url": "http://jm.pea.co.th",
    "name": "ระบบ Job Management PEA S3",
    "details": "ข้อมูล Job ของตนเอง , รายงานการติดตาม"
  },
  {
    "_id": {
      "$oid": "609b4271adf71824e487efa8"
    },
    "ลำดับ": "25",
    "tag": "อรรถประโยชน์ อื่นๆ ",
    "url": "http://smuser.pea.co.th/",
    "name": "ระบบสถิติข้อมูล User ID SAP",
    "details": "แสดงข้อมูลภาพรวมสถิติการใช้งานของแต่ละผู้ใช้แบ่งตามเขตพื้นที่ กฟฟ."
  },
  {
    "_id": {
      "$oid": "609b4271adf71824e487efba"
    },
    "ลำดับ": "43",
    "tag": "อรรถประโยชน์ อื่นๆ ",
    "url": "http://172.30.200.10/pea_network_transparent/people_network_info.php?",
    "name": "ทะเบียนควบคุมเครือข่ายภายใน/ภายนอก",
    "details": "ทะเบียนควบคุมเครือข่ายภายใน/ภายนอก"
  },
  {
    "_id": {
      "$oid": "609b4271adf71824e487efc7"
    },
    "ลำดับ": "56",
    "tag": "อรรถประโยชน์ อื่นๆ ",
    "url": "https://docs.google.com/spreadsheets/d/1KPYwqY74bXPWzSbHCHjERGavi0nW5zxxcrUs5rpw1Sk/edit#gid=185724961",
    "name": "รายงาน ผลการดำเนินการจัดระเบียบสายสื่อสาร",
    "details": "รายงานผลการจัดระเบียบสาย 474 เส้นทาง, งานจัดซื้อคอนสื่อสารฯ ต.3"
  },
  {
    "_id": {
      "$oid": "609b4271adf71824e487efd2"
    },
    "ลำดับ": "67",
    "tag": "เว็บ/แอพ ระบบงาน",
    "url": "https://ddoc.pea.co.th/login",
    "name": "ระบบสารบรรณอิเล็กทรอนิกส์ แบบรวมศูนย์",
    "details": "สารบรรณอิเล็กทรอนิกส์ , เก็บเอกสาร บันทึก, หนังสือเวียนเพื่อทราบ ,หนังสือส่งออก, หนังสือขาเข้า, หนังสือสำคัญ, หนังสือลงทะเบียนรับ"
  },
  {
    "_id": {
      "$oid": "609b4271adf71824e487efa6"
    },
    "ลำดับ": "23",
    "tag": "เว็บ/แอพ ระบบงาน",
    "url": "http://okr.pea.co.th/safetystock/index2.php?area=L",
    "name": "ระบบแจ้งเตือนพัสดุคงเหลือ",
    "details": "ระบบแจ้งเตือนพัสดุคงเหลือ คลังพัสดุเขต กฟต.3 (ยะลา)"
  },
  {
    "_id": {
      "$oid": "609b4271adf71824e487efa9"
    },
    "ลำดับ": "26",
    "tag": "เว็บ/แอพ ระบบงาน",
    "url": "https://dmsxupload.pea.co.th/asset",
    "name": "ระบบบริหารจัดการทรัพย์สิน",
    "details": "ตรวจสอบทรัพย์สิน กฟภ.ที่ถือครอง , ประวัติทรัพย์สิน, ซ่อมอุปกรณ์ IT"
  },
  {
    "_id": {
      "$oid": "609b4271adf71824e487efbc"
    },
    "ลำดับ": "45",
    "tag": "อรรถประโยชน์ อื่นๆ ",
    "url": "http://transparency.pea.co.th/cw",
    "name": "ระบบควบคุมงานจ้างเหมา ",
    "details": "ระบบควบคุมงานจ้างเหมา "
  },
  {
    "_id": {
      "$oid": "609b4271adf71824e487efc1"
    },
    "ลำดับ": "50",
    "tag": "อรรถประโยชน์ อื่นๆ ",
    "url": "https://crm.pea.co.th/",
    "name": "ระบบบริหารความสัมพันธ์ลูกค้า Customer Relationship Management",
    "details": "งานด้านบริหารลูกค้าสัมพันธ์ "
  },
  {
    "_id": {
      "$oid": "609b4271adf71824e487efca"
    },
    "ลำดับ": "59",
    "tag": "หน่วยงาน",
    "url": "http://rg4.pea.co.th/wp/",
    "name": "เว็บไซต์สายงานการไฟฟ้า ภาค 4 ",
    "details": "ข่าวประชาสัมพันธ์สายงาน, รายงานสถานะผลการดำเนินงานของ สายงานภาค 4 , ฝ่ายอำนวยการภูมิภาค ภาค 4 ฝอภ.(ภ4) , กองวิศวกรรม ภาค 4 กวศ.(ภ4), กองจัดการงาน ภาค 4"
  },
  {
    "_id": {
      "$oid": "609b4271adf71824e487efcd"
    },
    "ลำดับ": "62",
    "tag": "อรรถประโยชน์ อื่นๆ ",
    "url": "https://map.pea.co.th/pea/Default.aspx",
    "name": "ระบบภูมิสารสนเทศเพื่อการบริการผู้ใช้ไฟฟ้า",
    "details": "ระบบภูมิสารสนเทศเพื่อการบริการผู้ใช้ไฟฟ้า PEA MAP"
  },
  {
    "_id": {
      "$oid": "609b4271adf71824e487efb3"
    },
    "ลำดับ": "36",
    "tag": "เว็บ/แอพ ระบบงาน",
    "url": "http://peas3.pea.co.th/s3/itam/itam.htm",
    "name": "โปรแกรมบริหารข้อมูลอุปกรณ์คอมพิวเตอร์และเครือข่าย",
    "details": "แจ้งซ่อมอุปกรณ์คอมพิวเตอร์ผ่านระบบ"
  },
  {
    "_id": {
      "$oid": "609b4271adf71824e487efb9"
    },
    "ลำดับ": "42",
    "tag": "อรรถประโยชน์ อื่นๆ /หน่วยงาน",
    "url": "http://www.oic.go.th/INFOCENTER6/677",
    "name": "ศูนย์ข้อมูลข่าวสารอิเล็กทรอนิกส์ของรายการ การไฟฟ้าส่วนภูมิภาค เขต3 (ภาคใต้) จ.ยะลา",
    "details": "ศูนย์ข้อมูลข่าวสารอิเล็กทรอนิกส์ของรายการ การไฟฟ้าส่วนภูมิภาค เขต3 (ภาคใต้) จ.ยะลา"
  },
  {
    "_id": {
      "$oid": "609b4271adf71824e487efc2"
    },
    "ลำดับ": "51",
    "tag": "อรรถประโยชน์ อื่นๆ ",
    "url": "http://rg4.pea.co.th/auc/index.php?action=rg1",
    "name": "ระบบติดตามงานก่อสร้าง AUC",
    "details": "ติดตามงานก่อสร้างระบบไฟฟ้า, งานก่อสร้างที่ยังไม่ปิดงานเกิน 180 วัน นับจากวันเบิกพัสุดครั้งแรก"
  },
  {
    "_id": {
      "$oid": "609b4271adf71824e487efd9"
    },
    "ลำดับ": "74",
    "tag": "หน่วยงาน",
    "url": "http://intranet.pea.co.th/sites/lcr/en/example",
    "name": "กองที่ปรึกากฎหมาย และระเบียบ",
    "details": "กฎหมายน่ารู้"
  },
  {
    "_id": {
      "$oid": "609b4271adf71824e487efd1"
    },
    "ลำดับ": "66",
    "tag": "หน่วยงาน",
    "url": "http://s1intra.pea.co.th/#page-content",
    "name": "เว็บไซต์อินทราเน็ต กฟต.1 เพชบุรี",
    "details": "กิจกรรม/ข่าวสาร , งานนโยบาย กฟต.1, KnowledgeBox"
  },
  {
    "_id": {
      "$oid": "609b4271adf71824e487efd5"
    },
    "ลำดับ": "70",
    "tag": "อรรถประโยชน์ อื่นๆ /เกี่ยวกับพนักงาน",
    "url": "http://extranet.pea.co.th/WebApplications/PeaPassport/Login.aspx",
    "name": "PEA Extranet",
    "details": "ข้อมูลเกี่ยวกับพนักงาน, ข้อมูลส่วนตัวพนักงาน, ข้อมูลการอบรม/สัมมนา, รายงานการขัดแย้ง, การลงนามการกำกับดูแลกิจการที่ดี, การเปลี่ยนแปลงอัตราสะสม กองทุนสำรองเลี้ยงชีพ"
  },
  {
    "_id": {
      "$oid": "609b4271adf71824e487efdb"
    },
    "ลำดับ": "76",
    "tag": "อรรถประโยชน์ อื่นๆ /เกี่ยวกับพนักงาน",
    "url": "http://idm.pea.co.th",
    "name": "ข้อมูลส่วนบุคคลของพนักงาน IDM",
    "details": "แก้ไขข้อมูลส่วนตัว, แก้ไขรหัสผ่าน"
  },
  {
    "_id": {
      "$oid": "609b4271adf71824e487efa5"
    },
    "ลำดับ": "22",
    "tag": "เว็บ/แอพ ระบบงาน",
    "url": "https://eservice.pea.co.th/BackOffice/Account/Login?ReturnUrl=%2fBackOffice",
    "name": "ระบบตรวจสอบการชำระเงินออนไลน์ PEA e-Service",
    "details": "ตรวจสอบการชำระเงินออนไลน์ PEA e-Service"
  },
  {
    "_id": {
      "$oid": "609b4271adf71824e487efb7"
    },
    "ลำดับ": "40",
    "tag": "Dashboard",
    "url": "http://gisdashboard.pea.co.th/",
    "name": "GIS Dashboard",
    "details": "รายงานความก้าวหน้าผลการดำเนินการ Data Cleansing Phase Meter ระบบจำหน่ายแรงต่ำ"
  },
  {
    "_id": {
      "$oid": "609b4271adf71824e487efc3"
    },
    "ลำดับ": "52",
    "tag": "อรรถประโยชน์ อื่นๆ ",
    "url": "http://csm.pea.co.th/Refund",
    "name": "ระบบติดตามงานบริการลูกค้า Customer Service Monitering",
    "details": "ติดตามงานบริการลูกค้า , คืนเงินประกัน, ทะเบียนราษฎร์, ลายเซ็นอิเล็กทรอนิกส์, WOM, สับเปลี่ยนมิเตอร์"
  },
  {
    "_id": {
      "$oid": "609b4271adf71824e487efd0"
    },
    "ลำดับ": "65",
    "tag": "อรรถประโยชน์ อื่นๆ /เกี่ยวกับพนักงาน",
    "url": "www.pealife.pea.co.th",
    "name": "PEALife",
    "details": "เงินได้อิเล็กทรอนิกส์, ประวัติการทำงาน, กองทุนสำรองเลี้ยงชีพ, สถานพยาบาล, ยื่นเบิกสวัสดิการ, ปฏิบัติงานต่างพื้นที่ (สนญ.), ลางานออนไลน์, ปฏิบัติงานต่างพื้นที่ (ส่วนภูมิภาค)"
  },
  {
    "_id": {
      "$oid": "609b4271adf71824e487ef97"
    },
    "ลำดับ": "8",
    "tag": "เกี่ยวกับพนักงาน/หน่วยงาน",
    "url": "https://www.mfcfund.com",
    "name": "เว็บไซต์เปลี่ยนแปลงสัดส่วนการลงทุน MFCfund",
    "details": "เกี่ยวกับ MFC, รู้ก่อนลงทุน, กองทุนรวม, ลงทุนกับ MFC, รู้ทันภาวการณ์ตลาด ,ติดต่อเรา"
  },
  {
    "_id": {
      "$oid": "609b4271adf71824e487ef9a"
    },
    "ลำดับ": "11",
    "tag": "เว็บ/แอพ ระบบงาน",
    "url": "http://okr.pea.co.th",
    "name": "เว็บไซต์ระบบติดตามผล การดำเนินการตามเป้าหมาย OKR",
    "details": "Dashboard ลูกหนี้ค่าไฟฟ้า, รายงานสถานะลูกหนี้ค่าไฟฟ้าค้างชำระแยกตามประเภทผู้ใช้ไฟ,  รายงานลูกหนี้แยกตามอายุลูกหนี้, รายงานลูกหนี้ค่าไฟฟ้าเทียบกับเงินประกันการใช้ไฟฟ้า, รายงานลูกหนี้ค่าไฟฟ้าปรับปรุง,สถานะการติดตามงานระบบติดตามหนี้ค่าไฟฟ้าค้างชำระ (ETSx),รายงานผลการเบิกจ่ายงบสำรองกรณีเร่งด่วน ภาค 3,แผนปฏิบัติการ สายงานการไฟฟ้าภาค 3, รายงานตามแผนปฏิบัติ"
  },
  {
    "_id": {
      "$oid": "609b4271adf71824e487efa0"
    },
    "ลำดับ": "17",
    "tag": "เว็บ/แอพ ระบบงาน",
    "url": "http://172.28.1.9/prosecute",
    "name": "ระบบบริหารลูกหนี้ดำเนินคดี ",
    "details": "ข้อมูลผู้ใช้ไฟประกอบหนี้ค่ากระแสไฟฟ้าค้างชำระ หลักฐานประกอบหนี้ค่ากระแสไฟฟ้าค้างชำระ ทะเบียนคุมลูกหนี้ดำเนินคดี, กฟฟ.หน้างาน,แผนกบริหารหนี้"
  },
  {
    "_id": {
      "$oid": "609b4271adf71824e487efb2"
    },
    "ลำดับ": "35",
    "tag": "เว็บ/แอพ ระบบงาน",
    "url": "http://172.30.241.42:8080/BOE/BI",
    "name": "ระบบสารสนเทศสำหรับการ บริหารจัดการองค์กร",
    "details": "สารสนเทศสำหรับการ บริหารจัดการองค์กร"
  },
  {
    "_id": {
      "$oid": "609b4271adf71824e487efb6"
    },
    "ลำดับ": "39",
    "tag": "เว็บ/แอพ ระบบงาน",
    "url": "https://gisdatatracking.pea.co.th/login",
    "name": "GIS Data Tracking and Reporting",
    "details": "รายงานข้อมูล GIS "
  },
  {
    "_id": {
      "$oid": "609b4271adf71824e487efc4"
    },
    "ลำดับ": "53",
    "tag": "Dashboard",
    "url": "https://datastudio.google.com/reporting/8832964f-3318-44a8-97e0-662a65661e2d/page/gdRMB",
    "name": "รายงานด้านคุณภาพข้อมูลของระบบ GIS",
    "details": "รายงานด้านคุณภาพข้อมูลของระบบ GIS , รายงานจำนวนครั้งร้องเรียนด้านไฟตก, ความคลาดเคลื่อนมิเตอร์, ภาระทางไฟฟ้าของหม้อแปลง, ค่าใช้จ่ายงาน Cleansing , แผนที่หม้อแปลง Cleansing"
  },
  {
    "_id": {
      "$oid": "609b4271adf71824e487efd3"
    },
    "ลำดับ": "68",
    "tag": "อรรถประโยชน์ อื่นๆ /เกี่ยวกับพนักงาน",
    "url": "http://172.30.203.38/DDOC_OKR/main",
    "name": "OKR รายงานระบบสารบรรณอิเล็กทรอนิกส์ แบบรวมศูนย์",
    "details": "OKR รายงานระบบสารบรรณอิเล็กทรอนิกส์ แบบรวมศูนย์ , จำนวนข้อมูลเข้า (ต่อเดือน) แยกตามสังกัด กฟต.3"
  },
  {
    "_id": {
      "$oid": "609b4271adf71824e487efc8"
    },
    "ลำดับ": "57",
    "tag": "อรรถประโยชน์ อื่นๆ ",
    "url": "https://docs.google.com/forms/d/e/1FAIpQLSePsQBBUTvpR-xGHYnTZx0XRthapMFmX7aWfRkqM5SRfxrhQA/viewform",
    "name": "รายงานรูปถ่ายละเมิดการพาดสายสื่อสาร",
    "details": "ส่งข้อมูลภาพถ่ายเส้นทางละเมิด, ภาพถ่ายเส้นทางละเมิด พื้นที่ ต.3"
  },
  {
    "_id": {
      "$oid": "609b4271adf71824e487efce"
    },
    "ลำดับ": "63",
    "tag": "อรรถประโยชน์ อื่นๆ ",
    "url": "https://peaportal.pea.co.th/portal/home/index.html",
    "name": "PEA GIS Portal ",
    "details": "เว็บไซต์ที่ขยายความสามารถของข้อมูลระบบไฟฟ้า PEAMAP ที่มีอยู่ในปัจจุบัน หรือข้อมูล GIS ที่สร้างขึ้นใหม่ มาประยุกต์ เพื่อทำการสร้างแผนที่ และแชร์แผนที่ผ่านระบบเครือข่าย ซึ่งสามารถนำเสนอข้อมูลในเชิงกราฟฟิกได้อย่างรวดเร็ว อีกทั้งยังมีความสามารถเชื่อมต่อกับ Application บนมือถือ ที่ใช้สำรวจ นำเข้าข้อมูลจากภาคสนาม ทำให้ช่วยลดระยะเวลาการทำงาน ลดขั้นตอนการปฏิบัติงาน และเพิ่มประสิทธิภาพการทำงานมากยิ่งขึ้น "
  },
  {
    "_id": {
      "$oid": "609b4271adf71824e487ef91"
    },
    "tag": "หน่วยงาน",
    "url": "http://intranet.pea.co.th",
    "name": "เว็บไซต์อินทราเน็ต กฟภ.",
    "details": "แจ้งข่าวสารภายในองค์กร,  ค้นหาข้อมูลพนักงาน , ลิงค์หน่วยงาน , ดาวน์โหลดเอกสาร, e-App, Extranet, Pea-Mail, App Portal, สารบรรณ, ประชุมไร้กระดาษ",
    "id": "2"
  },
  {
    "_id": {
      "$oid": "609b4271adf71824e487efa3"
    },
    "ลำดับ": "20",
    "tag": "เว็บ/แอพ ระบบงาน",
    "url": "https://pealife-leave.pea.co.th/Leave/LoginUI.aspx",
    "name": "ระบบวันลาออนไลน์",
    "details": "การลางานออนไลน์ ของพนักงาน ลาป่วย, ลากิจ, ลาพักผ่อน, ขออนุญาติออกนอกสถานที่"
  },
  {
    "_id": {
      "$oid": "609b4271adf71824e487efaa"
    },
    "ลำดับ": "27",
    "tag": "อรรถประโยชน์ อื่นๆ ",
    "url": "https://plms.pea.co.th/",
    "name": "ระบบการประชุมแบบไร้กระดาษ",
    "details": "สามารถสร้างการจัดประชุม , ลงชื่อเข้าร่วมประชุม , เอกสารประกอบการประชุม"
  },
  {
    "_id": {
      "$oid": "609b4271adf71824e487efac"
    },
    "ลำดับ": "29",
    "tag": "อรรถประโยชน์ อื่นๆ /เกี่ยวกับพนักงาน",
    "url": "http://172.30.7.88/2020/",
    "name": "ระบบ Peata",
    "details": "ระบบประเมินสมรรถนะรอบด้าน (PEATA)"
  },
  {
    "_id": {
      "$oid": "609b4271adf71824e487efb4"
    },
    "ลำดับ": "37",
    "tag": "เว็บ/แอพ ระบบงาน",
    "url": "https://web.pea.co.th/sites/ptc/PTC_Login.aspx",
    "name": "ระบบบริหารจัดการข้อมูลจดหน่วยบน e-Form (Data Management System for Meter Reading)",
    "details": "ข้อมูลการจดหน่วย ก่อน-หลัง การตรวจสอบการจดหน่วย รายงาน"
  },
  {
    "_id": {
      "$oid": "609b4271adf71824e487efb5"
    },
    "ลำดับ": "38",
    "tag": "เว็บ/แอพ ระบบงาน",
    "url": "http://ucube.pea.co.th/ucube/",
    "name": "ระบบสารสนเทศเพื่อการจัดการจากหน่วยการใช้ไฟฟ้า",
    "details": "ระบบสารสนเทศเพื่อการจัดการจากหน่วยการใช้ไฟฟ้า"
  },
  {
    "_id": {
      "$oid": "609b4271adf71824e487efbe"
    },
    "ลำดับ": "47",
    "tag": "อรรถประโยชน์ อื่นๆ ",
    "url": "http://om.pea.co.th/",
    "name": "ระบบประกันคุณภาพบริการของ กฟภ. (SQA PEA) ",
    "details": "รายงานผลการดำเนินงานตามมาตราฐานคุณภาพบริการ"
  }
]

export async function get(request) {
  return {
    status: 200,
    body: posts
  }
}