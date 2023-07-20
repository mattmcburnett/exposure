from app.models import db, Image, environment, SCHEMA
from sqlalchemy.sql import text


# Adds a demo user, you can add other users here if you want
def seed_images():
    demo1 = Image(
        image='https://exposure-flickr-clone.s3.us-west-2.amazonaws.com/aaron-burden-GVnUVP8cs1o-unsplash.jpg',
        title= "Flowers Eye",
        caption='Behold the radiant beauty of the eye of a flower',
        owner_id = 1,
        artist_first_name = 'Demo',
        artist_last_name = 'User',
        basic_price = 15,
        exclusive_price = 200,
        royalty_rate = 3
    )
    demo2 = Image(
        image='https://exposure-flickr-clone.s3.us-west-2.amazonaws.com/andreas-gucklhorn-mawU2PoJWfU-unsplash.jpg',
        title= "Nature's Serenity",
        caption='Capturing the harmonious coexistence of a lush forest and a crystal-blue lake',
        owner_id = 1,
        artist_first_name = 'Demo',
        artist_last_name = 'User',
        basic_price = 20,
        exclusive_price = 250,
        royalty_rate = 4
    )
    demo3 = Image(
        image='https://exposure-flickr-clone.s3.us-west-2.amazonaws.com/casey-horner-4rDCa5hBlCs-unsplash.jpg',
        title= "Gazing Up",
        caption='Peer through the towering sentinels of the forest',
        owner_id = 1,
        artist_first_name = 'Demo',
        artist_last_name = 'User',
        basic_price = 10,
        exclusive_price = 100,
        royalty_rate = 2
    )
    demo4 = Image(
        image='https://exposure-flickr-clone.s3.us-west-2.amazonaws.com/daniil-silantev-F6Da4r2x5to-unsplash.jpg',
        title= "Tapestry of Ferns",
        caption='A lush sea of ferns unfolds in a mesmerizing display of vibrant green',
        owner_id = 1,
        artist_first_name = 'Demo',
        artist_last_name = 'User',
        basic_price = 15,
        exclusive_price = 200,
        royalty_rate = 3
    )
    demo5 = Image(
        image='https://exposure-flickr-clone.s3.us-west-2.amazonaws.com/dave-lsoogGC_5dg-unsplash+(1).jpg',
        title= "The Island's Retreat",
        caption='The warm hues of the fading daylight illuminate the peaceful waters',
        owner_id = 1,
        artist_first_name = 'Demo',
        artist_last_name = 'User',
        basic_price = 20,
        exclusive_price = 250,
        royalty_rate = 3
    )
    demo6 = Image(
        image='https://exposure-flickr-clone.s3.us-west-2.amazonaws.com/hendrik-cornelissen--qrcOR33ErA-unsplash.jpg',
        title= "A Stream's Journey",
        caption='A meandering stream carves its way through a majestic mountain valley',
        owner_id = 1,
        artist_first_name = 'Demo',
        artist_last_name = 'User',
        basic_price = 40,
        exclusive_price = 500,
        royalty_rate = 6
    )
    demo7 = Image(
        image='https://exposure-flickr-clone.s3.us-west-2.amazonaws.com/jay-mantri-TFyi0QOx08c-unsplash.jpg',
        title= "Fog Whispering to the Trees",
        caption='Ethereal enchantment as a dense blanket of fog envelops a serene forest',
        owner_id = 1,
        artist_first_name = 'Demo',
        artist_last_name = 'User',
        basic_price = 15,
        exclusive_price = 200,
        royalty_rate = 2
    )
    demo8 = Image(
        image='https://exposure-flickr-clone.s3.us-west-2.amazonaws.com/kevin-lanceplaine-sO-JmQj95ec-unsplash.jpg',
        title= "Violet's Journey",
        caption=' An extraordinary geological wonder, the walls rise high and narrow, painted with an array of violet hues',
        owner_id = 1,
        artist_first_name = 'Demo',
        artist_last_name = 'User',
        basic_price = 30,
        exclusive_price = 300,
        royalty_rate = 3
    )
    demo9 = Image(
        image='https://exposure-flickr-clone.s3.us-west-2.amazonaws.com/lukasz-szmigiel-jFCViYFYcus-unsplash.jpg',
        title= "Trail of Tranquility",
        caption='Follow the meandering path that leads you deeper into the heart of a serene forest',
        owner_id = 1,
        artist_first_name = 'Demo',
        artist_last_name = 'User',
        basic_price = 15,
        exclusive_price = 200,
        royalty_rate = 3
    )
    demo10 = Image(
        image='https://exposure-flickr-clone.s3.us-west-2.amazonaws.com/sebin-thomas-OdBFUurPHjo-unsplash.jpg',
        title= "Misty Ascension",
        caption='The weathered steps rise, seemingly leading to an unknown realm shrouded in mystery',
        owner_id = 1,
        artist_first_name = 'Demo',
        artist_last_name = 'User',
        basic_price = 10,
        exclusive_price = 100,
        royalty_rate = 1
    )

    db.session.add(demo1)
    db.session.add(demo2)
    db.session.add(demo3)
    db.session.add(demo4)
    db.session.add(demo5)
    db.session.add(demo6)
    db.session.add(demo7)
    db.session.add(demo8)
    db.session.add(demo9)
    db.session.add(demo10)


    marnie1 = Image(
        image='https://exposure-flickr-clone.s3.us-west-2.amazonaws.com/ashwini-chaudhary-monty-gkIXFjDRyDc-unsplash.jpg',
        title= "A Cloud-Capped Mountain",
        caption='Lofty heights reaching into the heavens',
        owner_id = 2,
        artist_first_name = 'Marnie',
        artist_last_name = 'Alpin',
        basic_price = 10,
        exclusive_price = 100,
        royalty_rate = 1
    )
    marnie2 = Image(
        image='https://exposure-flickr-clone.s3.us-west-2.amazonaws.com/azin-javadzadeh-Ow4ijRO4ZJw-unsplash.jpg',
        title= "Serene Dominance",
        caption="Standing resolute amidst a winter's embrace",
        owner_id = 2,
        artist_first_name = 'Marnie',
        artist_last_name = 'Alpin',
        basic_price = 20,
        exclusive_price = 200,
        royalty_rate = 2
    )
    marnie3 = Image(
        image='https://exposure-flickr-clone.s3.us-west-2.amazonaws.com/daniela-izotenko-hOhlYhAiizc-unsplash.jpg',
        title= "Verdant Heights",
        caption='Verdant Heights',
        owner_id = 2,
        artist_first_name = 'Marnie',
        artist_last_name = 'Alpin',
        basic_price = 30,
        exclusive_price = 300,
        royalty_rate = 3
    )
    marnie4 = Image(
        image='https://exposure-flickr-clone.s3.us-west-2.amazonaws.com/dino-reichmuth-CCdAm9SQVCg-unsplash.jpg',
        title= "Summit's Vantage",
        caption= "Peer into the vast valley below, where nature's intricate tapestry reveals itself.",
        owner_id = 2,
        artist_first_name = 'Marnie',
        artist_last_name = 'Alpin',
        basic_price = 30,
        exclusive_price = 300,
        royalty_rate = 3
    )
    marnie5 = Image(
        image='https://exposure-flickr-clone.s3.us-west-2.amazonaws.com/markos-mant-MdS2EJCDLlk-unsplash.jpg',
        title= "Mountain Guardians",
        caption='A resilient tree fence stands as a silent guardian of the landscape',
        owner_id = 2,
        artist_first_name = 'Marnie',
        artist_last_name = 'Alpin',
        basic_price = 40,
        exclusive_price = 400,
        royalty_rate = 4
    )
    marnie6 = Image(
        image='https://exposure-flickr-clone.s3.us-west-2.amazonaws.com/nathan-anderson-ZeXP6p7agjE-unsplash.jpg',
        title= "Barren Solitude",
        caption='Evoking solitude and introspection',
        owner_id = 2,
        artist_first_name = 'Marnie',
        artist_last_name = 'Alpin',
        basic_price = 50,
        exclusive_price = 550,
        royalty_rate = 4
    )
    marnie7 = Image(
        image='https://exposure-flickr-clone.s3.us-west-2.amazonaws.com/nicolai-kramer-reZbvcVASPI-unsplash.jpg',
        title= "Peak of Radiance",
        caption='The first rays of the morning sun grace the mountain peak with their golden touch',
        owner_id = 2,
        artist_first_name = 'Marnie',
        artist_last_name = 'Alpin',
        basic_price = 25,
        exclusive_price = 125,
        royalty_rate = 2
    )

    marnie8 = Image(
        image='https://exposure-flickr-clone.s3.us-west-2.amazonaws.com/simon-fitall-tvleqH3p1os-unsplash.jpg',
        title= "Approach of Winter",
        caption='The enchanting transformation as winter spreads its icy touch across the forest',
        owner_id = 2,
        artist_first_name = 'Marnie',
        artist_last_name = 'Alpin',
        basic_price = 20,
        exclusive_price = 300,
        royalty_rate = 3
    )

    db.session.add(marnie1)
    db.session.add(marnie2)
    db.session.add(marnie3)
    db.session.add(marnie4)
    db.session.add(marnie5)
    db.session.add(marnie6)
    db.session.add(marnie7)
    db.session.add(marnie8)

    meredith1 = Image(
        image='https://exposure-flickr-clone.s3.us-west-2.amazonaws.com/goutham-krishna-h5wvMCdOV3w-unsplash.jpg',
        title= "Summer Rain",
        caption='The summer rain delicately drapes lush leaves with glistening droplets',
        owner_id = 3,
        artist_first_name = 'Meredith',
        artist_last_name = 'Reeve',
        basic_price = 20,
        exclusive_price = 300,
        royalty_rate = 3
    )
    meredith2 = Image(
        image='https://exposure-flickr-clone.s3.us-west-2.amazonaws.com/niko-photos-tGTVxeOr_Rs-unsplash.jpg',
        title= "Anchored",
        caption='A solitary tree stands as a resilient sentinel',
        owner_id = 3,
        artist_first_name = 'Meredith',
        artist_last_name = 'Reeve',
        basic_price = 20,
        exclusive_price = 300,
        royalty_rate = 3
    )
    meredith3 = Image(
        image='https://exposure-flickr-clone.s3.us-west-2.amazonaws.com/nikola-majksner-hXNGeAFOgT4-unsplash.jpg',
        title= "Nature's Symphony",
        caption='Vibrant field of wildflowers carpets the land, with majestic mountains standing tall in the background',
        owner_id = 3,
        artist_first_name = 'Meredith',
        artist_last_name = 'Reeve',
        basic_price = 20,
        exclusive_price = 300,
        royalty_rate = 3
    )
    meredith4 = Image(
        image='https://exposure-flickr-clone.s3.us-west-2.amazonaws.com/qingbao-meng-01_igFr7hd4-unsplash+(1).jpg',
        title= "Eternal Meadows",
        caption='Rolling lush green hills, extending as far as the eye can wander',
        owner_id = 3,
        artist_first_name = 'Meredith',
        artist_last_name = 'Reeve',
        basic_price = 20,
        exclusive_price = 300,
        royalty_rate = 3
    )
    meredith5 = Image(
        image='https://exposure-flickr-clone.s3.us-west-2.amazonaws.com/robert-lukeman-_RBcxo9AU-U-unsplash+(1).jpg',
        title= "Order in Chaos",
        caption= "Discover a captivating juxtaposition in nature's design",
        owner_id = 3,
        artist_first_name = 'Meredith',
        artist_last_name = 'Reeve',
        basic_price = 20,
        exclusive_price = 300,
        royalty_rate = 3
    )

    db.session.add(meredith1)
    db.session.add(meredith2)
    db.session.add(meredith3)
    db.session.add(meredith4)
    db.session.add(meredith5)

    saira1 = Image(
        image='https://exposure-flickr-clone.s3.us-west-2.amazonaws.com/alexander-andrews-fsH1KjbdjE8-unsplash.jpg',
        title= "Cosmic Symphony",
        caption= "Immerse yourself in the mesmerizing hues of a celestial masterpiece",
        owner_id = 4,
        artist_first_name = 'Saira',
        artist_last_name = 'Frazier',
        basic_price = 30,
        exclusive_price = 200,
        royalty_rate = 6
    )
    saira2 = Image(
        image='https://exposure-flickr-clone.s3.us-west-2.amazonaws.com/casey-horner-RmoWqDCqN2E-unsplash.jpg',
        title= "Stellar Spectacle",
        caption= "Gaze up in awe as the night sky becomes a celestial theater",
        owner_id = 4,
        artist_first_name = 'Saira',
        artist_last_name = 'Frazier',
        basic_price = 30,
        exclusive_price = 200,
        royalty_rate = 6
    )
    saira3 = Image(
        image='https://exposure-flickr-clone.s3.us-west-2.amazonaws.com/jeremy-thomas-E0AHdsENmDg-unsplash.jpg',
        title= "Azure Cosmos",
        caption= "Mesmerizing blue galaxy nestled in the vastness of space",
        owner_id = 4,
        artist_first_name = 'Saira',
        artist_last_name = 'Frazier',
        basic_price = 30,
        exclusive_price = 200,
        royalty_rate = 6
    )
    saira4 = Image(
        image='https://exposure-flickr-clone.s3.us-west-2.amazonaws.com/shot-by-cerqueira-0o_GEzyargo-unsplash.jpg',
        title= "Ethereal Horizons",
        caption= "Venture into the depths of the cosmos and behold the awe-inspiring sight of a distant galaxy",
        owner_id = 4,
        artist_first_name = 'Saira',
        artist_last_name = 'Frazier',
        basic_price = 30,
        exclusive_price = 200,
        royalty_rate = 6
    )
    saira5 = Image(
        image='https://exposure-flickr-clone.s3.us-west-2.amazonaws.com/vincentiu-solomon-ln5drpv_ImI-unsplash.jpg',
        title= "Stellar Horizon",
        caption= "A shooting star streaks across the canvas of a breathtaking sunset",
        owner_id = 4,
        artist_first_name = 'Saira',
        artist_last_name = 'Frazier',
        basic_price = 30,
        exclusive_price = 200,
        royalty_rate = 6
    )

    db.session.add(saira1)
    db.session.add(saira2)
    db.session.add(saira3)
    db.session.add(saira4)
    db.session.add(saira5)

    leighton1 = Image(
        image='https://exposure-flickr-clone.s3.us-west-2.amazonaws.com/andrew-kambel--x92Ig1Lsf4-unsplash.jpg',
        title= "Vintage Charm",
        caption= "Step back in time and embrace the nostalgic allure",
        owner_id = 5,
        artist_first_name = 'Leighton',
        artist_last_name = 'Wiley',
        basic_price = 15,
        exclusive_price = 150,
        royalty_rate = 2
    )
    leighton2 = Image(
        image='https://exposure-flickr-clone.s3.us-west-2.amazonaws.com/dan-fisher-lb2cIHlyYsU-unsplash.jpg',
        title= "Nocturnal Wanderings",
        caption= "Under the gentle glow of green lights",
        owner_id = 5,
        artist_first_name = 'Leighton',
        artist_last_name = 'Wiley',
        basic_price = 15,
        exclusive_price = 150,
        royalty_rate = 2
    )
    leighton3 = Image(
        image='https://exposure-flickr-clone.s3.us-west-2.amazonaws.com/hayato-togashi-rCO-ROEfV50-unsplash.jpg',
        title= "Shadows of the City",
        caption= "Silhouetted figures embark on a rhythmic journey along the city sidewalk",
        owner_id = 5,
        artist_first_name = 'Leighton',
        artist_last_name = 'Wiley',
        basic_price = 15,
        exclusive_price = 150,
        royalty_rate = 2
    )
    leighton4 = Image(
        image='https://exposure-flickr-clone.s3.us-west-2.amazonaws.com/kajetan-sumila-rxgeOVBmSHg-unsplash.jpg',
        title= "Proud",
        caption= "A celebration of people, of love",
        owner_id = 5,
        artist_first_name = 'Leighton',
        artist_last_name = 'Wiley',
        basic_price = 15,
        exclusive_price = 150,
        royalty_rate = 2
    )
    leighton5 = Image(
        image='https://exposure-flickr-clone.s3.us-west-2.amazonaws.com/masahiro-miyagi--krQM605uv4-unsplash.jpg',
        title= "Neon Serenade",
        caption= "Hand in hand, they traverse the bustling urban landscape, lost in their own world",
        owner_id = 5,
        artist_first_name = 'Leighton',
        artist_last_name = 'Wiley',
        basic_price = 15,
        exclusive_price = 150,
        royalty_rate = 2
    )

    db.session.add(leighton1)
    db.session.add(leighton2)
    db.session.add(leighton3)
    db.session.add(leighton4)
    db.session.add(leighton5)

    els1 = Image(
        image='https://exposure-flickr-clone.s3.us-west-2.amazonaws.com/anastasiia-malai-Z-mATAfhrr8-unsplash.jpg',
        title= "Ethereal Illumination",
        caption= "Its delicate paper folds and intricate design create an enchanting focal point",
        owner_id = 6,
        artist_first_name = 'Els',
        artist_last_name = 'Hagen',
        basic_price = 15,
        exclusive_price = 150,
        royalty_rate = 2
    )
    els2 = Image(
        image='https://exposure-flickr-clone.s3.us-west-2.amazonaws.com/hrant-khachatryan-V0_qNPA8x8c-unsplash.jpg',
        title= "Grace Unveiled",
        caption= "A captivating display of artistic expression",
        owner_id = 6,
        artist_first_name = 'Els',
        artist_last_name = 'Hagen',
        basic_price = 15,
        exclusive_price = 150,
        royalty_rate = 2
    )
    els3 = Image(
        image='https://exposure-flickr-clone.s3.us-west-2.amazonaws.com/kateryna-hliznitsova-xd7dgT16x4w-unsplash.jpg',
        title= "Care",
        caption= "Dedicated hands lovingly tend to the needs of a treasured piano",
        owner_id = 6,
        artist_first_name = 'Els',
        artist_last_name = 'Hagen',
        basic_price = 15,
        exclusive_price = 150,
        royalty_rate = 2
    )
    els4 = Image(
        image='https://exposure-flickr-clone.s3.us-west-2.amazonaws.com/rod-long-CQ6Hyzswshg-unsplash.jpg',
        title= "The Neon Tree",
        caption= "A magical scene unfolds as a mesmerizing neon tree illuminates the darkness with its radiant glow",
        owner_id = 6,
        artist_first_name = 'Els',
        artist_last_name = 'Hagen',
        basic_price = 15,
        exclusive_price = 150,
        royalty_rate = 2
    )
    els5 = Image(
        image='https://exposure-flickr-clone.s3.us-west-2.amazonaws.com/ronin-dOIAbk3KtjA-unsplash.jpg',
        title= "Blooming Stitches",
        caption= "Intricate artistry as delicate threads weave together to create a stunning floral display",
        owner_id = 6,
        artist_first_name = 'Els',
        artist_last_name = 'Hagen',
        basic_price = 15,
        exclusive_price = 150,
        royalty_rate = 2
    )

    db.session.add(els1)
    db.session.add(els2)
    db.session.add(els3)
    db.session.add(els4)
    db.session.add(els5)


    celia1 = Image(
        image='https://exposure-flickr-clone.s3.us-west-2.amazonaws.com/abhishek-tiwari-kyfX03EYqoQ-unsplash+(1).jpg',
        title= "White Lights Dance",
        caption= "twisting white lights create a mesmerizing dance of ethereal spirals",
        owner_id = 7,
        artist_first_name = 'Celia',
        artist_last_name = 'Torrejon',
        basic_price = 10,
        exclusive_price = 250,
        royalty_rate = 3
    )
    celia2 = Image(
        image='https://exposure-flickr-clone.s3.us-west-2.amazonaws.com/eugene-golovesov-W9FlufHSAXY-unsplash.jpg',
        title= "Whirling Blossoms",
        caption= "Captivating dance as vibrant red flowers spin and twirl",
        owner_id = 7,
        artist_first_name = 'Celia',
        artist_last_name = 'Torrejon',
        basic_price = 10,
        exclusive_price = 250,
        royalty_rate = 3
    )
    celia3 = Image(
        image='https://exposure-flickr-clone.s3.us-west-2.amazonaws.com/eugene-golovesov-eY6WNu9aMcI-unsplash.jpg',
        title= "Transformative Display",
        caption= "blue flowers shift and transform, creating a captivating display of ever-changing elegance",
        owner_id = 7,
        artist_first_name = 'Celia',
        artist_last_name = 'Torrejon',
        basic_price = 10,
        exclusive_price = 250,
        royalty_rate = 3
    )
    celia4 = Image(
        image='https://exposure-flickr-clone.s3.us-west-2.amazonaws.com/mahdi-bafande-7ftQLT1MP04-unsplash+(1).jpg',
        title= "Radiant Trails",
        caption= "vibrant trails of multicolor illumination",
        owner_id = 7,
        artist_first_name = 'Celia',
        artist_last_name = 'Torrejon',
        basic_price = 10,
        exclusive_price = 250,
        royalty_rate = 3
    )
    celia5 = Image(
        image='https://exposure-flickr-clone.s3.us-west-2.amazonaws.com/visax--vBn1T8g0D4-unsplash.jpg',
        title= "Shadowed Red",
        caption= "captivating shadows, creating an enigmatic display of visual artistry",
        owner_id = 7,
        artist_first_name = 'Celia',
        artist_last_name = 'Torrejon',
        basic_price = 10,
        exclusive_price = 250,
        royalty_rate = 3
    )

    db.session.add(celia1)
    db.session.add(celia2)
    db.session.add(celia3)
    db.session.add(celia4)
    db.session.add(celia5)

    niels1 = Image(
        image='https://exposure-flickr-clone.s3.us-west-2.amazonaws.com/alexander-andrews-mEdKuPYJe1I-unsplash+(1).jpg',
        title= "Cunning Gaze",
        caption= "piercing eyes hold a glimpse into the wild allure of nature's cunning beauty.",
        owner_id = 8,
        artist_first_name = 'Niels',
        artist_last_name = 'Wilde',
        basic_price = 25,
        exclusive_price = 500,
        royalty_rate = 4
    )
    niels2 = Image(
        image='https://exposure-flickr-clone.s3.us-west-2.amazonaws.com/geran-de-klerk-wYy3rvvgjAU-unsplash+(1).jpg',
        title= "Regal Perch",
        caption= "A powerful connection to the untamed wilderness and a reminder of nature's unwavering majesty",
        owner_id = 8,
        artist_first_name = 'Niels',
        artist_last_name = 'Wilde',
        basic_price = 25,
        exclusive_price = 500,
        royalty_rate = 4
    )
    niels3 = Image(
        image='https://exposure-flickr-clone.s3.us-west-2.amazonaws.com/nam-anh-QJbyG6O0ick-unsplash.jpg',
        title= "Harmony of the Wild",
        caption= "Discover a harmonious connection between two worlds",
        owner_id = 8,
        artist_first_name = 'Niels',
        artist_last_name = 'Wilde',
        basic_price = 25,
        exclusive_price = 500,
        royalty_rate = 4
    )
    niels4 = Image(
        image='https://exposure-flickr-clone.s3.us-west-2.amazonaws.com/uriel-soberanes-oMvtVzcFPlU-unsplash+(1).jpg',
        title= "Fierce Elegance",
        caption= "Unveils the essence of fierce elegance",
        owner_id = 8,
        artist_first_name = 'Niels',
        artist_last_name = 'Wilde',
        basic_price = 25,
        exclusive_price = 500,
        royalty_rate = 4
    )
    niels5 = Image(
        image='https://exposure-flickr-clone.s3.us-west-2.amazonaws.com/yuya-yoshioka-0U1TsyC7RZE-unsplash.jpg',
        title= "Warning",
        caption= "Displays a potent combination of strength and anticipation",
        owner_id = 8,
        artist_first_name = 'Niels',
        artist_last_name = 'Wilde',
        basic_price = 25,
        exclusive_price = 500,
        royalty_rate = 4
    )

    db.session.add(niels1)
    db.session.add(niels2)
    db.session.add(niels3)
    db.session.add(niels4)
    db.session.add(niels5)

    nor1 = Image(
        image='https://exposure-flickr-clone.s3.us-west-2.amazonaws.com/jeremy-bishop-1braZySlEKA-unsplash.jpg',
        title= "Underwater Bubbles",
        caption= "Underwater bubbles dance and shimmer in the vast expanse of the ocean",
        owner_id = 9,
        artist_first_name = 'Nor',
        artist_last_name = 'Radzi',
        basic_price = 30,
        exclusive_price = 400,
        royalty_rate = 5
    )
    nor2 = Image(
        image='https://exposure-flickr-clone.s3.us-west-2.amazonaws.com/kino--MWoUTlQcHA-unsplash.jpg',
        title= "A Playful Spray",
        caption= "Whimsical charm of a tiny beach spray",
        owner_id = 9,
        artist_first_name = 'Nor',
        artist_last_name = 'Radzi',
        basic_price = 30,
        exclusive_price = 400,
        royalty_rate = 5
    )
    nor3 = Image(
        image='https://exposure-flickr-clone.s3.us-west-2.amazonaws.com/matt-hardy-6ArTTluciuA-unsplash+(1).jpg',
        title= "Ripples in the ocean",
        caption= "The rhythmic dance of gentle ocean ripples",
        owner_id = 9,
        artist_first_name = 'Nor',
        artist_last_name = 'Radzi',
        basic_price = 30,
        exclusive_price = 400,
        royalty_rate = 5
    )
    nor4 = Image(
        image='https://exposure-flickr-clone.s3.us-west-2.amazonaws.com/silas-baisch-K785Da4A_JA-unsplash+(1).jpg',
        title= "Darting Through the Ocean",
        caption= "Harmonious school of fish darts through the ocean with synchronized precision",
        owner_id = 9,
        artist_first_name = 'Nor',
        artist_last_name = 'Radzi',
        basic_price = 30,
        exclusive_price = 400,
        royalty_rate = 5
    )
    nor5 = Image(
        image='https://exposure-flickr-clone.s3.us-west-2.amazonaws.com/wexor-tmg-L-2p8fapOA8-unsplash.jpg',
        title= "Underwater Encounter",
        caption= "Sleek shell and gentle movements, the sea turtle embodies a sense of ancient wisdom and serenity",
        owner_id = 9,
        artist_first_name = 'Nor',
        artist_last_name = 'Radzi',
        basic_price = 30,
        exclusive_price = 400,
        royalty_rate = 5
    )

    db.session.add(nor1)
    db.session.add(nor2)
    db.session.add(nor3)
    db.session.add(nor4)
    db.session.add(nor5)

    bernd1 = Image(
        image='https://exposure-flickr-clone.s3.us-west-2.amazonaws.com/baptiste-merel-J_jdWPyaNDo-unsplash.jpg',
        title= "Intimate Bass",
        caption= "Bathed in the warm glow of crimson hues",
        owner_id = 10,
        artist_first_name = 'Bernd',
        artist_last_name = 'Keller',
        basic_price = 15,
        exclusive_price = 200,
        royalty_rate = 2
    )
    bernd2 = Image(
        image='https://exposure-flickr-clone.s3.us-west-2.amazonaws.com/baptiste-merel-u3vBgi1Ba0k-unsplash.jpg',
        title= "Neon Show",
        caption= "A world of electric energy",
        owner_id = 10,
        artist_first_name = 'Bernd',
        artist_last_name = 'Keller',
        basic_price = 15,
        exclusive_price = 200,
        royalty_rate = 2
    )
    bernd3 = Image(
        image='https://exposure-flickr-clone.s3.us-west-2.amazonaws.com/mono-log-STtFW2BrrJk-unsplash.jpg',
        title= "Singular Projection",
        caption= "Enter a realm of introspection",
        owner_id = 10,
        artist_first_name = 'Bernd',
        artist_last_name = 'Keller',
        basic_price = 15,
        exclusive_price = 200,
        royalty_rate = 2
    )
    bernd4 = Image(
        image='https://exposure-flickr-clone.s3.us-west-2.amazonaws.com/nichika-yoshida-uvBj33NLQJs-unsplash.jpg',
        title= "Spectacle",
        caption= "Witness the sky come alive in a fiery display",
        owner_id = 10,
        artist_first_name = 'Bernd',
        artist_last_name = 'Keller',
        basic_price = 15,
        exclusive_price = 200,
        royalty_rate = 2
    )
    bernd5 = Image(
        image='https://exposure-flickr-clone.s3.us-west-2.amazonaws.com/salman-sidheek-4TmECe3xOO4-unsplash.jpg',
        title= "Neon Valet",
        caption= "he neon lights, vibrant and inviting, cast a serene glow upon the vacant space",
        owner_id = 10,
        artist_first_name = 'Bernd',
        artist_last_name = 'Keller',
        basic_price = 15,
        exclusive_price = 200,
        royalty_rate = 2
    )

    db.session.add(bernd1)
    db.session.add(bernd2)
    db.session.add(bernd3)
    db.session.add(bernd4)
    db.session.add(bernd5)


    db.session.commit()


# Uses a raw SQL query to TRUNCATE or DELETE the users table. SQLAlchemy doesn't
# have a built in function to do this. With postgres in production TRUNCATE
# removes all the data from the table, and RESET IDENTITY resets the auto
# incrementing primary key, CASCADE deletes any dependent entities.  With
# sqlite3 in development you need to instead use DELETE to remove all data and
# it will reset the primary keys for you as well.
def undo_images():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.images RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM images"))

    db.session.commit()
