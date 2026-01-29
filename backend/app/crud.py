from sqlalchemy.orm import Session
from .models import Employee, Attendance

def create_employee(db: Session, data):
    employee = Employee(**data.dict())
    db.add(employee)
    db.commit()
    db.refresh(employee)
    return employee


def get_employees(db: Session):
    return db.query(Employee).all()


def delete_employee(db: Session, employee_id: int):
    employee = db.query(Employee).filter(Employee.id == employee_id).first()
    if not employee:
        return None
    db.delete(employee)
    db.commit()
    return employee


def mark_attendance(db: Session, data):
    record = Attendance(**data.dict())
    db.add(record)
    db.commit()
    db.refresh(record)
    return record


def get_attendance_by_employee(db: Session, employee_id: int):
    return db.query(Attendance).filter(Attendance.employee_id == employee_id).all()
