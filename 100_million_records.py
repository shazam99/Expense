import psycopg2
from faker import Faker
from datetime import datetime

# Connect to PostgreSQL
conn = psycopg2.connect(
    dbname='LocalDB',
    user='postgres',
    password='root',
    host='localhost',
    port='5432',
)
cursor = conn.cursor()

# Instantiate Faker for generating fake data
fake = Faker()

# Generate and insert dummy data
for _ in range(10):  # 100 million rows
    user_id = fake.random_int(min=1, max=3)  # Random 6-digit alphanumeric value
    expense_amount = fake.random_int(min=1, max=5000)
    expense_name = fake.text(max_nb_chars=50)  # Random text for expense name
    category = fake.random_element(elements=['Food', 'Transportation', 'Entertainment', 'Shopping', 'Fuel', 'Utility', 'Medical'])
    date = fake.date_between(start_date='-1m', end_date='today')

    # Insert data into PostgreSQL table
    cursor.execute("""
        INSERT INTO dummytransactions (UserID, ExpenseAmount, ExpenseName, Category, Date)
        VALUES (%s, %s, %s, %s, %s)
    """, (user_id, expense_amount, expense_name, category, date))
    print(_)
    conn.commit()
    

# Commit changes and close connection
cursor.close()
conn.close()
