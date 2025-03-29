function loadTimestamp() {
    document.getElementById('timestamp').value = new Date();
}

const MEMBERSHIP_NON_PROFIT = '1';
const MEMBERSHIP_BRONZE = '2';
const MEMBERSHIP_SILVER = '3';
const MEMBERSHIP_GOLD = '4';

function listenToMembershipDetailButtons() {
    document.querySelectorAll('.membership-card button')
        .forEach(el => el.addEventListener('click', displayMembershipDetails));
}

function displayMembershipDetails(event) {
    const dialog = document.getElementById('membership-dialog');
    const content = document.querySelector('#membership-dialog div');

    content.innerHTML = getContentText(event.target.dataset.level);

    dialog.showModal();
}

function getContentText(level) {
    if (level == MEMBERSHIP_NON_PROFIT) {
        return `
            <h3>Nonprofit Membership</h3>
            <p>The Nonprofit Membership is tailored for nonprofit organizations
                that wish to strengthen their connections within the community.</p>
            <p>Members at this level gain access to networking opportunities
                with local businesses, discounts on select chamber-hosted events,
                and basic training resources designed to support nonprofit growth.</p>
            <p>Additionally, nonprofits receive a listing in the chamber directory
                to enhance their visibility and outreach.</p>
            <p>This membership is an ideal choice for nonprofits seeking meaningful
                connections without exceeding their budgets.</p>`;
    }

    if (level == MEMBERSHIP_BRONZE) {
        return `
            <h3>Bronze Membership</h3>
            <p>The Bronze Membership offers small businesses the chance to
                elevate their involvement in the local economy.</p>
            <p>It includes all benefits provided to nonprofit members, plus
                access to exclusive member-only events, discounts on advertising
                packages, and the opportunity to feature their business in
                monthly newsletters.</p>
            <p>Bronze members also enjoy basic spotlight opportunities on the
                chamber’s website homepage, making this level a perfect stepping
                stone for businesses that want to grow their presence.</p>`;
    }

    if (level == MEMBERSHIP_SILVER) {
        return `
            <h3>Silver Membership</h3>
            <p>For those looking to enhance their influence within the community,
                the Silver Membership provides an excellent option.</p>
            <p>Silver members receive all Bronze-level benefits alongside
                premium advertising placements, including more prominent
                homepage spotlight features.</p>
            <p>They also benefit from complimentary participation in select
                training workshops, priority invitations to high-profile
                networking events, and access to a dedicated member support
                representative.</p>
            <p>This membership is ideal for businesses aiming to strengthen
                their local impact and visibility.</p>`;
    }

    return `
        <h3>Gold Membership</h3>
        <p>The Gold Membership is the ultimate choice for businesses that want
            to lead within the community.</p>
        <p>This exclusive level includes all Silver-level benefits while adding
            unique sponsorship opportunities at major chamber events, featured
            interviews or articles in chamber publications, and VIP access to
            special chamber functions.</p>
        <p>Gold members also receive tailored training and consulting sessions
            designed to meet their specific business needs.</p>
        <p>With this membership, businesses can shine as champions of the local
            economy and foster deeper engagement with the community.</p>`;
}

function runCloseModal() {
    document.querySelector('#closeModal')
        .addEventListener('click', () =>
            document.querySelector('#membership-dialog').close());
}

listenToMembershipDetailButtons();
runCloseModal();
loadTimestamp();
