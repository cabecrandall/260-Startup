# 260-Startup

# MediCost
Medicost is an application that compares doctors all over a given area (Provo, for example). A user creates an account, chooses their insurance, and then can filter clinics and offices based on their healthcare needs. This will include options for specific procedures, general practice doctors, and ER rates for all known hospitals and clinics. The application will also include a rating system for doctors and clinics according to registered users. The interface would look like a much better version of the following representation:

![Mock!](mock.png)

## Key Features:
- Secure login and account creation
- Search history is permanently saved in account profile
- User review history is also permanently saved, always viewable by all users
- Ability to set default insurance for searches
- All clinics will have an average rating (not seen in the mock)

## Technologies used:
- **Authentication**: Users must make an account to leave and view reviews. Their favorite doctors and clinics will also be saved. 
- **Database data**: User reviews for each hospital in the database will appear upon selecting that hospital location in a search. 
- **WebSocket data**: The homepage will have links for recent medical news from Google, probably... Or maybe local news based on location!

### Limitations
There's a reason why this hasn't been done on a large scale. It's an idea that has a lot of application across a huge swath of the market (the market being all people that need to go to the hospital). Monetizing this bad boy would be one thing (perhaps impossble), but making an extremely simple and intuitive UI is the highest priority.

