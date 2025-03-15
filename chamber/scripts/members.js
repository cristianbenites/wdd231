const buildData = async () => {
    const data = await fetch('../data/members.json');

    console.log(data);

}


buildData();
