import sqlite3

# Assuming you have a SQLite connection
conn = sqlite3.connect(':memory:')  # Use ':memory:' for an in-memory database
cursor = conn.cursor()

# Create User and Restaurant tables and insert sample data
cursor.execute("CREATE TABLE IF NOT EXISTS User (username TEXT, city TEXT);")
cursor.execute("CREATE TABLE IF NOT EXISTS Restaurant (restaurant_name TEXT, city TEXT);")

users_data = [
    ("alex", "london"),
    ("charlie", "london"),
    ("avery", "moscow"),
    ("billie", "tokyo")
]

restaurants_data = [
    ("table", "london"),
    ("icewind", "london"),
    ("blueglass", "moscow"),
    ("redwine", "london")
]

cursor.executemany("INSERT INTO User VALUES (?, ?);", users_data)
cursor.executemany("INSERT INTO Restaurant VALUES (?, ?);", restaurants_data)

def joinUsersAndRestaurants(cursor, city, order):
    # Define the SQL query with the specified conditions
    query = f'''
        SELECT User.username, Restaurant.restaurant_name
        FROM User
        JOIN Restaurant ON User.city = Restaurant.city
        WHERE User.city = '{city}'
        ORDER BY User.username {order}, Restaurant.restaurant_name {order};
    '''

    # Execute the query and fetch the results
    cursor.execute(query)
    results = cursor.fetchall()

    # Print the results explicitly
    for result in results:
        print(result)

# Example usage
# Call the function with the specified parameters
joinUsersAndRestaurants(cursor, city="tokyo", order="asc")

# Close the connection when done
conn.close()
