from app.models import db, User, environment, SCHEMA
from sqlalchemy.sql import text


# Adds a demo user, you can add other users here if you want
def seed_users():
    demo = User(
        username='Demo', email='demo@aa.io', password='password',
        first_name='Demo', last_name='User', age='30', about="Out in the wild, I'm home.",
        profile_pic="https://exposure-flickr-clone.s3.us-west-2.amazonaws.com/aaron-burden-GVnUVP8cs1o-unsplash.jpg"
    )
    marnie = User(
        username='marnie', email='marnie@aa.io', password='password',
        first_name='Marnie', last_name='Alpin', age='36', about='The mountains are calling.',
        profile_pic="https://exposure-flickr-clone.s3.us-west-2.amazonaws.com/ashwini-chaudhary-monty-gkIXFjDRyDc-unsplash.jpg"
    )
    meredith = User(
        username='meredith', email='meredith@aa.io', password='password',
        first_name='Meredith', last_name='Reeve', age='24', about="I enjoy lush, green landscapes and capturing our Earth's natural beauty.",
        profile_pic="https://exposure-flickr-clone.s3.us-west-2.amazonaws.com/goutham-krishna-h5wvMCdOV3w-unsplash.jpg"
    )
    saira = User(
        username='saira', email='saira@aa.io', password='password',
        first_name='Saira', last_name='Frazier', age='19', about="I'm always looking to the sky.",
        profile_pic="https://exposure-flickr-clone.s3.us-west-2.amazonaws.com/alexander-andrews-fsH1KjbdjE8-unsplash.jpg"
    )
    leighton = User(
        username='leighton', email='leighton@aa.io', password='password',
        first_name='Leighton', last_name='Wiley', age='46', about="People are my passion.",
        profile_pic="https://exposure-flickr-clone.s3.us-west-2.amazonaws.com/andrew-kambel--x92Ig1Lsf4-unsplash.jpg"
    )
    els = User(
        username='els', email='els@aa.io', password='password',
        first_name='Els', last_name='Hagen', age='34', about="Travel and exploration is the most important thing in life.",
        profile_pic="https://exposure-flickr-clone.s3.us-west-2.amazonaws.com/anastasiia-malai-Z-mATAfhrr8-unsplash.jpg"
    )
    celia = User(
        username='celia', email='celia@aa.io', password='password',
        first_name='Celia', last_name='Torrejon', age='27', about="Pushing the boundaries.",
        profile_pic="https://exposure-flickr-clone.s3.us-west-2.amazonaws.com/abhishek-tiwari-kyfX03EYqoQ-unsplash+(1).jpg"
    )
    niels = User(
        username='niels', email='niels@aa.io', password='password',
        first_name='Niels', last_name='Wilde', age='64', about="Connection with nature is everything to me.",
        profile_pic="https://exposure-flickr-clone.s3.us-west-2.amazonaws.com/alexander-andrews-mEdKuPYJe1I-unsplash+(1).jpg"
    )
    nor = User(
        username='nor', email='nor@aa.io', password='password',
        first_name='Nor', last_name='Radzi', age='31', about="Darlin' it's better, down where it's wetter, take it from me!",
        profile_pic="https://exposure-flickr-clone.s3.us-west-2.amazonaws.com/jeremy-bishop-1braZySlEKA-unsplash.jpg"
    )
    bernd = User(
        username='bernd', email='bernd@aa.io', password='password',
        first_name='Bernd', last_name='Keller', age='50', about="Art is in life's little moments.",
        profile_pic="https://exposure-flickr-clone.s3.us-west-2.amazonaws.com/salman-sidheek-4TmECe3xOO4-unsplash.jpg"
    )

    db.session.add(demo)
    db.session.add(marnie)
    db.session.add(meredith)
    db.session.add(saira)
    db.session.add(leighton)
    db.session.add(els)
    db.session.add(celia)
    db.session.add(niels)
    db.session.add(nor)
    db.session.add(bernd)
    db.session.commit()


# Uses a raw SQL query to TRUNCATE or DELETE the users table. SQLAlchemy doesn't
# have a built in function to do this. With postgres in production TRUNCATE
# removes all the data from the table, and RESET IDENTITY resets the auto
# incrementing primary key, CASCADE deletes any dependent entities.  With
# sqlite3 in development you need to instead use DELETE to remove all data and
# it will reset the primary keys for you as well.
def undo_users():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.users RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM users"))

    db.session.commit()
