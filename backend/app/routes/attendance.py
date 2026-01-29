from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from ..database import SessionLocal
from ..schemas import AttendanceCreate, AttendanceResponse
from ..crud import mark_attendance, get_attendance_by_employee

router = APIRouter(prefix="/attendance", tags=["Attendance"])

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@router.post("/", response_model=AttendanceResponse)
def add_attendance(data: AttendanceCreate, db: Session = Depends(get_db)):
    return mark_attendance(db, data)

@router.get("/{employee_id}", response_model=list[AttendanceResponse])
def list_attendance(employee_id: int, db: Session = Depends(get_db)):
    return get_attendance_by_employee(db, employee_id)
