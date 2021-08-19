# test-nipa project

web-application จัดการ Ticket สำหรับแจ้งปัญหา โดยข้อมูลประกอบไปด้วย หัวข้อ รายละเอียด สถานะ อีเมล์ เบอร์โทรติดต่อ วันเวลาที่สร้าง ticket และ วันเวลาที่ update ข้อมูล

สามารถสร้าง Ticket ใหม่ได้ โดยกรอกข้อมูลที่่ประกอบไปด้วย หัวข้อ รายละเอียด อีเมล์ เบอร์โทรติดต่อ ซึ่งมีการตรวจสอบข้อมูลในช่องกรอกแต่ละช่อง ก่อนที่จะสร้าง ticket ใหม่

โดย ticket ที่ถูกสร้างขึ้นมาจะมีสถานะ Pending เป็นสถานะเริ่มต้น โดยสามารถ update สถานะต่างๆ ได้เป็น 3 สถานะ คือ Approve, Resolved, Rejected

ในการเปลี่ยนแปลงสถานะจาก Pending เป็นสถานะอื่นจะไม่สามารถเปลี่ยนสถานะกลับมาเป็น Pending ได้ สถานะอื่นๆ คือ

Approve คือ สถานะที่ ticket สำเร็จลุล่วงและจะไม่สามารถเปลี่ยนแปลงไปสถานะไหนได้อีก ถือเป็นการสิ้นสุด ticket

Resolved คือ สถานะที่ ticket กำลังแก้ปัญหาซึ่งจะสามารถเปลี่ยนไปได้ 2 สถานะคือ Rejected คือการปฏิเสธ ticket นั้นๆ และ Approve เป็นการสำเร็จลุล่วงใน ticket นั้นๆ

Rejected คือ สถานะที่ ticket ถูกปฏิเสธซึ่งสามารถเปลี่ยนเป็นสถานะ Resolved ได้เพื่อนำมาแก้ปัญหาในภายหลัง

Ticket ทั้งหมดจะถูกแสดงในหน้าแรก โดยเรียงจากสถานะก่อนและเวลาที่อัพเดทข้อมูลล่าสุด และนอกจากนั้นยังสามารถถเลือกสถานะเพื่อแสดงแค่ Ticket ที่อยุ่ในสถานะนั้นๆ

Stack และ Technology ที่ใช้ในโปรเจคนี้ประกอบด้วย

Database - ใช้ mongoDB ผ่านตัว Mongo atlas cloud เพื่อใช้งาน mongoDB

Backend - ใช้ nodeJS framework ที่ใช้คือ ExpressJS ซึ่งเป็น framework พื้นฐานในการทำ CRUD และใช้ moogoose เพื่อเชื่อมต่อกับ mongoDB แล้้วใช้สำหรับสร้าง Schema

Frontend - ใช้ react เขียนด้วย TypeScript และใช้ Sass เป็น framework เพื่อ genearte CSS ขึ้นมาตกแต่ง UI นอกจากนี้ยังใช้ Sweetalert2 มาช่วยในการทำ alert popup และใช้ Axios มาช่วยในการเชื่อม API

นอกจากนี้ยังแนบมาด้วย postman collection ประกอบไปด้วย api ที่ใช้ในโปรเจคนี้

# เริ่มต้นใช้งาน backend

เข้าไปที่ folder backend เพื่อเข้าไปโปรเจคที่อยู่ของ backend รัน npm install เพื่อ install node_modules ต่างๆของโปรเจค

รัน npm start เพื่อ start project ถือเป็นการเปิดใช้งาน backend

backend ถูกกำหนดให้รันบน localhost port 3001

# เริ่มต้นใช้งาน frontend

เข้าไปที่ folder frontend เพื่อเข้าไปโปรเจคที่อยุ่ของ frontend และเข้าไปยัง my-app

รัน yarn install เพื่อน install node_modules ต่างๆของโปรเจค

รัน yarn start เพื่อ start project เพื่อรัน web-application ของโปรเจคขึ้นมา

frontend ถูกกำหนดให้รันบน localhost port 3000
