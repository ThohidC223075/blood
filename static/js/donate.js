//Script form district and police station
document.getElementById('district').addEventListener('change', function () {
    var policeStationSelect = document.getElementById('policeStation');
    var district = this.value;
    // Clear previous options
    policeStationSelect.innerHTML = '<option value="">Select Police Station</option>';

    // Police station data for each district
    var policeStations = {
        Bagerhat: ['Bagerhat Sadar', 'Chitalmari', 'Fakirhat', 'Kachua', 'Mollahat', 'Mongla', 'Morrellganj', 'Rampal', 'Sarankhola'],

        Bandarban: ['Alikadam', 'Bandarban Sadar', 'Lama', 'Naikhongchhari', 'Rowangchhari', 'Ruma', 'Thanchi'],

        Barguna: ['Amtoli', 'Bamna', 'Barguna', 'Pathargata', 'Taltoli'],

        Barishal: ['Agailjhara', 'Airport', 'Babuganj', 'Bakerganj', 'Banaripara', 'Bandar', 'Gournadi', 'Hizla', 'Kawnia', 'Kazirhat', 'Kotwali Model', 'Mehediganj', 'Muladi', 'Wazirpur'],

        Bhola: ['Bhola Sadar Model', 'Burhanuddin', 'Charfasson', 'Dakshin Aicha', 'Doulatkhan', 'Dularhat', 'Lalmohan', 'Manpura', 'Soshivusian', 'Tazumuddin'],

        Bogura: ['Adamdighi', 'Bogura Sadar', 'Dhunat', 'Dhupchanchia', 'Gabtali', 'Kahalu', 'Nandigram', 'Sariakandi', 'Shahjahanpur', 'Sherpur', 'Shibganj', 'Sonatola'],

        Brahmanbaria: ['Akhaura', 'Ashuganj', 'Bancharamapur', 'Bijoynagar', 'Bramanbaria Sadar', 'Kasba', 'Nabinagar', 'Nasirnagar', 'Sarail'],

        Chandpur: ['Chandpur Sadar Model', 'Faridganj', 'Haimchar', 'Haziganj', 'Kachua', 'Matlab Dakshin', 'Matlab Uttar', 'Shahrashti'],

        Chapainawabganj: ['Bholahat', 'Gomostapur', 'Nachol', 'Sadar Model', 'Shibganj'],

        Chattogram: ['Akbar Shah', 'Anwara', 'Bakalia', 'Bandar', 'Banshkhali', 'Bayezid Bostami', 'Bhujpura', 'Boalkhali', 'Chandanaish', 'Chandgaon', 'Chawk Bazar', 'Double Mooring', 'EPZ', 'Fatikchhari', 'Halisahar', 'Hathazari', 'Jorarganj', 'Karnaphuli', 'Khulshi', 'Kotowali', 'Lohagara', 'Mirsharai', 'Pahartoli', 'Panchlaish', 'Patenga', 'Patiya', 'Rangunia', 'Raizan', 'Sadargat', 'Sandwip', 'Satkania', 'Sitakunda'],

        Chuadanga: ['Alamdanga', 'Chuadanga Sadar', 'Damurhuda', 'Darshana', 'Jibannagar'],

        "Cox's Bazar": ['Chakaria', 'Cox’s Bazar', 'Eidgaon', 'Kutubdia', 'Maheshkhali', 'Pekua', 'Ramu', 'Teknaf', 'Ukhia'],

        Cumilla: ['Bangora Bazar', 'Barura', 'Brahmanpara', 'Burichong', 'Chandina', 'Chaudhagram', 'Daudkandi', 'Debidwar', 'Homna', 'Kotwali Model', 'Laksam', 'Lalmol', 'Manoharganj', 'Meghna', 'Muradnagar', 'Nangalkot', 'Sadar Dakshin', 'Sada Dakshin', 'Titas'],

        Dhaka: ['Adabor', 'Airport', 'Ashulia', 'Badda', 'Banani', 'Bangshal', 'Cantonment', 'Chawk Bazar', 'Dakshin Khan', 'Darus Salam', 'Demra', 'Dhamrai', 'Dhanmondi', 'Dohar', 'Gendaria', 'Gulshan', 'Hatirjheel', 'Hazaribagh', 'Jatrabari', 'Kadomtali', 'Kafrul', 'Kalabagan', 'Kamrangirchar', 'Keraniganj Model', 'Khilgaon', 'Khikhet', 'Kotwali', 'Lalbagh', 'Mirpur', 'Mohammadpur', 'Motijheel', 'Mugda', 'Nawabganj', 'New Market', 'Pallabi', 'Paltan Model', 'Ramna Model', 'Rampura', 'Rupnagar', 'Sabujbagh', 'Savar', 'Shah Ali', 'Shahbagh', 'Shahjahanpur', 'Shampur', 'Sher-E-Bangla Nagar', 'South Keraniganj', 'Sutrapur', 'Tejgaon', 'Tejgaon Industrial Area', 'Turag', 'Uttara East', 'Uttara West', 'Uttarakhon', 'Vashantek', 'Vatara', 'Wari'],

        Dinajpur: ['Biral', 'Birampur', 'Birganj', 'Bochaganj', 'Chirirbandar', 'Ghoraghat', 'Hakimpur', 'Kaharole', 'Khansama', 'Kotwali', 'Nawabganj', 'Parbatipur', 'Phulpur'],

        Faridpur: ['Alfadanga', 'Bhanga', 'Boalmari', 'Char Bhadrashan', 'Kotwali', 'Madhukhali', 'Nagarkanda', 'Sadarpur', 'Saltha'],

        Feni: ['Chhagalnaiya', 'Daganbhuiyan', 'Feni Sadar', 'Fulgazi', 'Parshuram', 'Sonagazi'],

        Gaibanda: ['Fulchhari', 'Gaibandha Sadar', 'Gobindaganj', 'Palashbari', 'Sadullapur', 'Shaghata', 'Sundarganj'],

        Gazipur: ['Bason', 'Gacha', 'Gazipur Sadar', 'Joydebpur', 'Kaliakair', 'Kaliganj', 'Kapasia', 'Kasimpur', 'Konabari', 'Pubail', 'Sreepur', 'Tongi East', 'Tongi West'],

        Gopalganj: ['Gopalganj', 'Kashiani', 'Kotalipara', 'Muksudpur', 'Tungipara'],

        Habiganj: ['Ajmiriganj', 'Bahubal', 'Baniachong', 'Chunarughat', 'Habiganj', 'Lakhai', 'Madhabpur', 'Nabiganj', 'Shaestaganj'],

        Jamalpur: ['Bakshiganj', 'Dewanganj', 'Islampur', 'Jamalpur Sadar', 'Madarganj', 'Melandaha', 'Sarishabari'],

        Jashore: ['Abhaynagar', 'Bagherpara', 'Benapole Port', 'Chaugachha', 'Jhikargachha', 'Keshabpur', 'Kotwali', 'Manirampur', 'Sharsha'],

        Jhalakati: ['Jhalokati', 'Kathalia', 'Nalchity', 'Rajapur'],

        Jhenaidah: ['Harinakunda', 'Jhenaidah', 'Kaliganj', 'Kotchandpur', 'Maheshpur', 'Shailkupa'],

        Joypurhat: ['Akkelpour', 'Joypurhat', 'Kalai', 'Khetlal', 'Panchbibi'],

        Khagrachari: ['Dighinala', 'Guimara', 'Khagrachari', 'Laxmichhari', 'Manikchhari', 'Matiranga', 'Mohalchhari', 'Panchhari', 'Ramgarh'],

        Khulna: ['Aronghata', 'Batiaghata', 'Dacope', 'Daulatpur', 'Digholia', 'Dumuria', 'Horintana', 'Khalishpur', 'Khan Jahan Ali', 'Khulna Sadar', 'Koyra', 'Labanchara', 'Paikgasa', 'Phultala', 'Rupsha', 'Sonadanga Model', 'Terokhada'],

        Kishoreganj: ['Austagram', 'Bajitpur', 'Bhairab', 'Hossainpur', 'Itna', 'Karimganj', 'Katiadi', 'Kishoreganj Sadar', 'Kuliarchar', 'Mithamain', 'Nikli', 'Pakundia', 'Taraail'],

        Kurigram: ['Bhurungamari', 'Char Rajibpur', 'Chimari', 'Dusmara', 'Kachakata', 'Kurigram Sadar', 'Nageshwari', 'Phulbari', 'Rajarhat', 'Ulipur'],

        Kushtia: ['Bheramara', 'Daulatpur', 'Islamic University', 'Khoksa', 'Kumarkhail', 'Kushtia Model', 'Mirpur'],

        Lakshmipur: ['Chandragonj', 'Kamalnagar', 'Lakshmipur Sadar', 'Raipur', 'Ramganj', 'Ramgati'],

        Lalmonirhat: ['Aditmari', 'Hatibandha', 'Kaliganj', 'Lalmonirhat', 'Patgram'],

        Madaripur: ['Dashar', 'Kalkini', 'Madaripur Sadar', 'Rajoir', 'Shibchar'],

        mMgura: ['Magura Sadar', 'Mohammadpur', 'Shalikha', 'Sreepur'],

        Manikganj: ['Daulatpur', 'Ghior', 'Harirampur', 'Manikganj Sadar', 'Saturia', 'Shibalaya', 'Singair'],

        Meherpur: ['Gangni', 'Meherpur Sadar', 'Mujibnagar'],

        Moulvibazar: ['Barlekha', 'Juri', 'Komolganj', 'Kularua', 'Moulvibazar Sadar', 'Rajnagar', 'Sreemangal'],

        Munshiganj: ['Gazaria', 'Louhajong', 'Munshiganj', 'Padma Setu North', 'Sirajdikhan', 'Sreenagar', 'Tongibari'],

        Mymensingh: ['Bhaluka', 'Dhoabura', 'Fulbaria', 'Gaforgao', 'Gouripur', 'Haluaghat', 'Ishwarganj', 'Kotwali', 'Muktagacha', 'Nandail', 'Pagla', 'Phulpur', 'Tarakanda', 'Trishal'],

        Naogaon: ['Atrai', 'Badalgachhi', 'Dhamoirhat', 'Mahadebpur', 'Manda', 'Naogaon Sadar', 'Nimatpur', 'Patnitala', 'Porsha', 'Raninagar', 'Sapahar'],

        Narail: ['Kalia', 'Lohagara', 'Naragati', 'Narail Sadar'],

        Narayanganj: ['Araihazar', 'Bandar', 'Fatullah', 'Narayanganj Sadar', 'Rupganj', 'Siddhirganj', 'Sonargaon'],

        Narsingdi: ['Belabo', 'Madhabdi', 'Monohardi', 'Narsingdi Sadar', 'Palash', 'Raipure', 'Shibpur'],

        Natore: ['Bagatipara', 'Baraigram', 'Gurudaspur', 'Lalpur', 'Naldanga', 'Natore', 'Singra'],

        Netrokona: ['Atpara', 'Barhatta', 'Durgapur', 'Kalmakanda', 'Kendua', 'Khaliajuri', 'Modon', 'Mohanganj', 'Netrokona Sadar Model', 'Purbadhala'],

        Nilphamari: ['Dimla', 'Domar', 'Jaldhaka', 'Kishoreganj', 'Nilphamari Sadar', 'Saidpur'],

        Noakhali: ['Begumganj', 'Bhasan Char', 'Charjabbar', 'Chatkhil', 'Companigonj', 'Hatiya', 'Kabirhat', 'Senbagh', 'Sonaimuri', 'Sudharam'],

        Pabna: ['Aminpur', 'Ataikula', 'Atgharia', 'Bera', 'Bhangura', 'Chatmohar', 'Faridpur', 'Ishwardi', 'Pabna Sadar', 'Santhia', 'Sujanagar'],

        Panchagarh: ['Atwari', 'Boda', 'Debiganj', 'Panchagarh Sadar', 'Tetulia'],

        Patuakhali: ['Bauphal', 'Dashmina', 'Dumki', 'Galachipa', 'Kalapara', 'Mirzaganj', 'Mohipur', 'Patuakhali Sadar', 'Rangbali'],

        Pirojpur: ['Bhandaria', 'Indurkani', 'Kawkhali', 'Mathbaria', 'Nazirpur', 'Nesarabad', 'Pirojpur Sadar'],

        Rajbari: ['Baliakandi', 'Goalanda Ghat', 'Kalukhali', 'Pangsha', 'Rajbari'],

        Rajsahi: ['Airport', 'Bagha', 'Bagmara', 'Bilpukur', 'Boalia Model', 'Chandrima', 'Chargat', 'Damkura', 'Durgapur', 'Godagari', 'Kashiadanga', 'Katakhali', 'Kornahar', 'Mohanpur', 'Motihar', 'Paba', 'Puthia', 'Rajpara', 'Shah Makhdum', 'Tanor'],

        Rangamati: ['Baghaichhari', 'Barkal', 'Belaichhari', 'Chandraghona', 'Juraichhari', 'Kaptai', 'Kawkhalil (Betbunia)', 'Kotwali', 'Langadu', 'Naniarchar', 'Rajasthali', 'Sajek'],

        Rangpur: ['Badarganj', 'Gangachara', 'Haragach', 'Hazirhat', 'Kaunia', 'Kotwali Metro', 'Mahigonj', 'Mitha Pukur', 'Pirgachha', 'Pirganj', 'Porshuram', 'Rangpur Sadar', 'Tajhat', 'Taraganj'],

        Satkhira: ['Ashashuni', 'Debhata', 'Kalaroa', 'Kaliganj', 'Patkelghata', 'Satkhira Sadar', 'Shyamnagar', 'Tala'],

        Shariatpur: ['Bhedarganj', 'Damudya', 'Gosairhat', 'Jajira', 'Naria', 'Padma Setu South', 'Palong Model', 'Shakhipur'],

        Sherpur: ['Jhenaigati', 'Nakla', 'Nalitabari', 'Sherpur', 'Sribardi'],

        Sirajganj: ['Bangabandhu Setu West', 'Belkuchi', 'Chowhali', 'Enayetpur', 'Kamarkhand', 'Kazipur', 'Rangonj', 'Salanga', 'Shahjadpur', 'Sirajganj', 'Tarsh', 'Ullapara Model'],

        Sunamganj: ['Bishwambarpur', 'Chhatak', 'Dakshin Sunamganj', 'Derai', 'Dharampasha', 'Dowarbazar', 'Jagannathpur', 'Jamalganj', 'Madhanagar', 'Sullah', 'Sunamganj Sadar', 'Tahirpur'],

        Sylhet: ['Airport', 'Balaganj', 'Beanibazar', 'Bishwanath', 'Companyganj', 'Fenchuganj', 'Golapganj', 'Goainghat', 'Jaintapur', 'Jalalabad', 'Kanaighat', 'Kotwali', 'Moglabazar', 'Osmaninagar', 'Shahporan', 'South Surma', 'Zokiganj'],

        Tangail: ['Bangabandhu Setu East', 'Bangabandhu Setu East', 'Basail', 'Bhuapur', 'Delduar', 'Dhanbari', 'Ghatail', 'Gopalpur', 'Kalihati', 'Madhupur', 'Mirzapur', 'Nagarpur', 'Sakhipur', 'Tangail Sadar'],

        Thakurgaon: ['Baliadang', 'Bhully', 'Haripur', 'Pirganj', 'Ranisankail', 'Ruhia', 'Thakurgaon Sadar']

    };

    // Check if the district has corresponding police stations
    if (district && policeStations[district]) {
        policeStations[district].forEach(function (station) {
            var option = document.createElement('option');
            option.value = station.toLowerCase().replace(/\s+/g, '');
            option.text = station;
            policeStationSelect.appendChild(option);
        });
    }
});



// Script for Navigation bar
let menuList = document.getElementById("menuList");
window.addEventListener('DOMContentLoaded', function () {
    if (window.innerWidth >= 768) {
        menuList.style.height = 'auto';
    } else {
        menuList.style.height = '0px';
    }
});

function toggleMenu() {
    if (menuList.style.height == "0px") {
        menuList.style.height = "auto";
    }
    else {
        menuList.style.height = "0px";
    }
}

// This function is not necessary for users but for dev mode
window.addEventListener('resize', function () {
    if (window.innerWidth >= 768) {
        menuList.style.height = 'auto';
    } else {
        menuList.style.height = '0px';
    }
});
