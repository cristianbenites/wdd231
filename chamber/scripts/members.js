const url = 'https://cristianbenites.github.io/wdd231/chamber/data/members.json';

const buildData = async () => {
    const response = await fetch(url);
    const { members } = await response.json();

    const section = document.getElementById('members');

    const cards = members.map(createMemberCard);

}

const createMemberCard = (member) => {
    const card = document.createElement('div');
    card.classList.add('member-card');

    const h2 = document.createElement('h2');
    h2.textContent = member.name;

    const tagline = document.createElement('p');
    tagline.classList.add('tagline');
    tagline.textContent = member.address;

                    <div class="member-card">
                        <h2>Business Name</h2>
                        <p class="tagline">Business Tag Line</p>
                        <hr>
                        <img src="" alt="">
                        <p class="email">EMAIL: <span>info@example.com</span></p>
                        <p class="phone">PHONE: <span>+55 11 3000-0000</span></p>
                        <p class="url">URL: <span>example.com.br</span></p>
                    </div>

    "name": "PeakClimb Gear",
    "address": "Rocade des Grimpeurs, Timbuktu, Mali",
    "phone_number": "+1 555-0707",
    "website_url": "https://www.peakclimbgear.com",
    "image_file": "peakclimb_icon.png",
    "membership_level": 2,
    "industry": "Outdoor Equipment",
    "featured_products": ["Hiking Boots", "Climbing Harnesses", "Tents"]

    return member;

};



buildData();
