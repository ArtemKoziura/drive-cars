const statesInfo = [
    {state: "ABILENE - TX", price: 420, port: 3},
    {state: "ACE - Carson (CA)", price: 345, port: 4},
    {state: "ACE - Perris - CA", price: 310, port: 4},
    {state: "ACE - Perris 2 - CA", price: 310, port: 4},
    {state: "ADELANTO-CA", price: 320, port: 4},
    {state: "AKRON-CANTON (OH)", price: 600, port: 1},
    {state: "ALBANY - NY", price: 325, port: 1},
    {state: "ALBUQUERQUE - NM", price: 770, port: 3},
    {state: "ALDEN NY", price: 545, port: 1},
    {state: "ALTOONA - PA", price: 490, port: 1},
    {state: "AMARILLO - TX", price: 495, port: 3},
    {state: "AMERICAN CANYON CA", price: 545, port: 4},
    {state: "AMSTERDAM NY", price: 420, port: 1},
    {state: "ANAHEIM (CA)", price: 260, port: 4},
    {state: "ANCHORAGE - AK", price: 2570, port: 4},
    {state: "ANDREWS-TX", price: 495, port: 3},
    {state: "ANTELOPE - CA", price: 1270, port: 3},
    {state: "APPLETON - WI", price: 400, port: 5},
    {state: "ARROLIME NV", price: 520, port: 4},
    {state: "ASHEVILLE - NC", price: 420, port: 2},
    {state: "Ashland KY", price: 520, port: 2},
    {state: "ATLANTA EAST - GA", price: 395, port: 2},
    {state: "ATLANTA GA", price: 395, port: 2},
    {state: "ATLANTA NORTH - GA", price: 395, port: 2},
    {state: "ATLANTA SOUTH - GA", price: 395, port: 2},
    {state: "ATLANTA WEST - GA", price: 395, port: 2},
    {state: "AUGUSTA - GA", price: 370, port: 2},
    {state: "AUSTIN - TX", price: 320, port: 3},
    {state: "AVENEL NEW JERSEY (NJ)", price: 245, port: 1},
    {state: "BAKERSFIELD - CA", price: 370, port: 4},
    {state: "BALTIMORE - MD", price: 370, port: 1},
    {state: "BATON ROUGE - LA", price: 395, port: 3},
    {state: "BILLINGS - MT", price: 920, port: 6},
    {state: "BIRMINGHAM - AL", price: 475, port: 2},
    {state: "BISMARCK - ND", price: 1170, port: 5},
    {state: "BOISE-ID", price: 570, port: 6},
    {state: "BOSTON - SHIRLEY - MA", price: 445, port: 1},
    {state: "Bowling Green - KY", price: 460, port: 6},
    {state: "BRIDGEPORT (PA)", price: 345, port: 1},
    {state: "BRIDGETON MO", price: 420, port: 5},
    {state: "Buckhannon MV", price: 620, port: 1},
    {state: "BUFFALO - NY", price: 545, port: 1},
    {state: "Burlington (VT)", price: 670, port: 1},
    {state: "CANDIA - NH", price: 445, port: 1},
    {state: "CARTERSVILLE - GA", price: 370, port: 1},
    {state: "CASPER - WY", price: 1020, port: 5},
    {state: "CENTRAL NEW JERSEY", price: 245, port: 1},
    {state: "CHAMBERSBURG - PA", price: 420, port: 1},
    {state: "CHARLESTON - SC", price: 320, port: 2},
    {state: "CHARLESTON - WV", price: 570, port: 1},
    {state: "CHARLOTTE (NC)", price: 370, port: 2},
    {state: "CHATTANOOGA-TN", price: 520, port: 2},
    {state: "CHICAGO HEIGHTS IL", price: 320, port: 5},
    {state: "CHICAGO NORTH - IL", price: 270, port: 5},
    {state: "CHICAGO SOUTH - IL", price: 270, port: 5},
    {state: "Chicago-West IL", price: 270, port: 5},
    {state: "CHINA GROVE - NC", price: 395, port: 2},
    {state: "CICERO-IN", price: 320, port: 5},
    {state: "CINCINNATI - OH", price: 550, port: 1},
    {state: "CLEARWATER-FL", price: 370, port: 7},
    {state: "Cleveland - OH", price: 650, port: 1},
    {state: "CLEVELAND EAST - OH", price: 650, port: 1},
    {state: "CLEVELAND WEST - OH", price: 650, port: 1},
    {state: "CLEWISTON FL", price: 395, port: 7},
    {state: "COLORADO SPRINGS - CO", price: 720, port: 5},
    {state: "COLTON - CA", price: 280, port: 4},
    {state: "COLUMBIA - MO", price: 420, port: 4},
    {state: "COLUMBIA - SC", price: 290, port: 2},
    {state: "COLUMBUS - OH", price: 600, port: 1},
    {state: "CONCORD - NC", price: 370, port: 2},
    {state: "CORPUS CHRISTI - TX", price: 345, port: 3},
    {state: "CRASHEDTOYS DALLAS - TX", price: 335, port: 3},
    {state: "CUDAHY WI", price: 450, port: 5},
    {state: "CULPEPER - VA", price: 420, port: 1},
    {state: "DALLAS SOUTH - TX", price: 370, port: 3},
    {state: "DALLAS- TX", price: 370, port: 3},
    {state: "DANVILLE - VA", price: 445, port: 2},
    {state: "DAVENPORT - IA", price: 445, port: 5},
    {state: "DAYTON - OH", price: 650, port: 1},
    {state: "DENVER - CO", price: 620, port: 5},
    {state: "DENVER CENTRAL-CO", price: 620, port: 5},
    {state: "DENVER EAST - CO", price: 745, port: 3},
    {state: "DENVER SOUTH - CO", price: 620, port: 5},
    {state: "DES MOINES - IA", price: 380, port: 5},
    {state: "DETROIT - MI", price: 500, port: 5},
    {state: "DOTHAN - AL", price: 500, port: 2},
    {state: "Dream Rides", price: 420, port: 1},
    {state: "DREAM RIDES", price: 520, port: 4},
    {state: "DUNDALK - MD", price: 395, port: 1},
    {state: "DYER-IN", price: 320, port: 5},
    {state: "EARLINGTON-KY", price: 520, port: 5},
    {state: "EAST BAY (CA)", price: 495, port: 4},
    {state: "EAST BETHEL - MN", price: 670, port: 1},
    {state: "EL PASO - TX", price: 520, port: 3},
    {state: "ELDRIDGE - IA", price: 420, port: 5},
    {state: "ELK RIVER MN", price: 445, port: 5},
    {state: "ELKTON – MD", price: 370, port: 1},
    {state: "ENGLISHTOWN (NJ)", price: 245, port: 1},
    {state: "ERIE - PA", price: 595, port: 1},
    {state: "EUGENE - OR", price: 470, port: 6},
    {state: "Eugene OR", price: 870, port: 4},
    {state: "EXETER - RI", price: 395, port: 1},
    {state: "FAIR HAVEN - VT", price: 670, port: 1},
    {state: "FAIRBURN-GA", price: 345, port: 2},
    {state: "FARGO (ND)", price: 970, port: 5},
    {state: "FAYETTEVILLE - AR", price: 520, port: 3},
    {state: "FLINT - MI", price: 500, port: 5},
    {state: "FONTANA - CA", price: 320, port: 4},
    {state: "Fort Myers-FL", price: 420, port: 7},
    {state: "FORT WAYNE - IN", price: 370, port: 5},
    {state: "FORT WORTH NORTH (TX)", price: 395, port: 3},
    {state: "FREDERICKSBURG - VA", price: 420, port: 1},
    {state: "Fredericksburg-South - VA", price: 420, port: 1},
    {state: "FREETOWN - MA", price: 445, port: 1},
    {state: "FREMONT - CA", price: 445, port: 4},
    {state: "FRESNO - CA", price: 420, port: 4},
    {state: "FRUITLAND MD", price: 420, port: 1},
    {state: "FT.PIERCE - FL", price: 270, port: 7},
    {state: "FT.WORTH - TX", price: 345, port: 3},
    {state: "GASTON SC", price: 320, port: 2},
    {state: "GASTONIA-NC", price: 370, port: 2},
    {state: "GLASSBORO EAST - NJ", price: 270, port: 1},
    {state: "GLASSBORO WEST - NJ", price: 300, port: 1},
    {state: "GORHAM - ME", price: 520, port: 1},
    {state: "GRAHAM-WA", price: 370, port: 6},
    {state: "GRAND RAPIDS (MI)", price: 500, port: 5},
    {state: "GREENSBORO (NC)", price: 395, port: 2},
    {state: "GREENVILLE (SC)", price: 320, port: 2},
    {state: "GREER - SC", price: 295, port: 2},
    {state: "GRENADA (MS)", price: 570, port: 2},
    {state: "Gulf Coast (MS)", price: 520, port: 3},
    {state: "HAM LAKE MN", price: 420, port: 5},
    {state: "HAMMOND - IN", price: 270, port: 5},
    {state: "HAMPTON - VA", price: 420, port: 1},
    {state: "HARRISBURG - PA", price: 370, port: 1},
    {state: "HARTFORD - CT", price: 305, port: 1},
    {state: "HARTFORD SPRINGFIELD-CT", price: 305, port: 1},
    {state: "Hartford-South - CT", price: 310, port: 1},
    {state: "HAYWARD - CA", price: 470, port: 4},
    {state: "HELENA-MT", price: 870, port: 6},
    {state: "HIGH DESERT - CA", price: 250, port: 4},
    {state: "HONOLULU - HI", price: 2500, port: 4},
    {state: "HOUSTON - TX", price: 270, port: 3},
    {state: "HOUSTON EAST - TX", price: 300, port: 3},
    {state: "Houston South - TX", price: 300, port: 3},
    {state: "Houston-North - TX", price: 300, port: 3},
    {state: "HUDSON MA", price: 445, port: 1},
    {state: "INDIANAPOLIS - IN", price: 420, port: 5},
    {state: "IONIA - MI", price: 400, port: 5},
    {state: "JACKSON - MS", price: 445, port: 3},
    {state: "JACKSONVILLE EAST - FL", price: 270, port: 2},
    {state: "JACKSONVILLE NORTH -FL", price: 270, port: 2},
    {state: "JACKSONVILLE WEST - FL", price: 270, port: 2},
    {state: "JOBSTOWN NJ", price: 320, port: 1},
    {state: "KANSAS CITY - KS", price: 495, port: 5},
    {state: "Kansas City East - MO", price: 495, port: 5},
    {state: "KINCHELOE - MI", price: 850, port: 5},
    {state: "KNOXVILLE - TN", price: 470, port: 2},
    {state: "LAFAYETTE (LA)", price: 345, port: 3},
    {state: "LANCASTER CA", price: 320, port: 4},
    {state: "LANSING - MI", price: 600, port: 5},
    {state: "LAS VEGAS - NV", price: 520, port: 4},
    {state: "Laurel - MD", price: 420, port: 1},
    {state: "LEXINGTON EAST - KY", price: 445, port: 5},
    {state: "LEXINGTON SC", price: 345, port: 2},
    {state: "LEXINGTON WEST - KY", price: 445, port: 5},
    {state: "LINCOLN - NE", price: 520, port: 5},
    {state: "LITTLE ROCK - AR", price: 495, port: 3},
    {state: "LONG BEACH - CA", price: 220, port: 4},
    {state: "LONG ISLAND - NY", price: 320, port: 1},
    {state: "LONGVIEW - TX", price: 320, port: 3},
    {state: "LOS ANGELES - CA", price: 270, port: 4},
    {state: "Los Angeles South - CA", price: 320, port: 4},
    {state: "LOUISVILLE - KY", price: 495, port: 5},
    {state: "Louisville North - KY", price: 495, port: 5},
    {state: "LUBBOCK - TX", price: 495, port: 3},
    {state: "LUFKIN - TX", price: 295, port: 3},
    {state: "LUMBERTON -NC", price: 345, port: 2},
    {state: "LYMAN - ME", price: 520, port: 1},
    {state: "MACON - GA", price: 320, port: 2},
    {state: "MADISON - WI", price: 325, port: 5},
    {state: "MALVERN PA", price: 245, port: 1},
    {state: "Manchester (NH)", price: 470, port: 1},
    {state: "MARTINEZ - CA", price: 470, port: 4},
    {state: "MCALLEN - TX", price: 380, port: 3},
    {state: "ME - WINDHAM", price: 520, port: 1},
    {state: "MEBANE - NC", price: 370, port: 2},
    {state: "MEMPHIS - TN", price: 495, port: 5},
    {state: "MENTONE - CA", price: 320, port: 4},
    {state: "METRO DC", price: 395, port: 1},
    {state: "MIAMI CENTRAL - FL", price: 270, port: 7},
    {state: "MIAMI NORTH - FL", price: 270, port: 7},
    {state: "MIAMI SOUTH - FL", price: 270, port: 7},
    {state: "MILWAUKEE - WI", price: 350, port: 5},
    {state: "MILWAUKEE NORTH - WI", price: 350, port: 5},
    {state: "MILWAUKEE SOUTH - WI", price: 350, port: 5},
    {state: "MINNEAPOLIS - MN", price: 420, port: 5},
    {state: "MINNEAPOLIS NORTH - MN", price: 420, port: 5},
    {state: "MISSOULA(MT)", price: 770, port: 6},
    {state: "MOBILE - AL", price: 450, port: 2},
    {state: "MOCKSVILLE - NC", price: 370, port: 2},
    {state: "MODESTO CA", price: 520, port: 3},
    {state: "MONTGOMERY - AL", price: 475, port: 2},
    {state: "NASHVILLE - TN", price: 470, port: 2},
    {state: "NEW BRITAIN CT", price: 305, port: 1},
    {state: "NEW CASTLE - WY", price: 370, port: 1},
    {state: "NEW ORLEANS - LA", price: 470, port: 2},
    {state: "New Orleans East - LA", price: 470, port: 3},
    {state: "NEWBURGH - NY", price: 320, port: 1},
    {state: "NORTH BOSTON - MA", price: 445, port: 1},
    {state: "NORTH CHARLESTON", price: 295, port: 2},
    {state: "NORTH HOLYWOOD - СА", price: 270, port: 4},
    {state: "NORTH SEATTLE-WA", price: 320, port: 6},
    {state: "NORTHERN VIRGINIA (VA)", price: 470, port: 1},
    {state: "OCALA - FL", price: 345, port: 7},
    {state: "OGDEN- UT", price: 470, port: 4},
    {state: "OKLAHOMA CITY - OK", price: 595, port: 3},
    {state: "OMAHA (NE)", price: 445, port: 5},
    {state: "ORLANDO - FL", price: 345, port: 7},
    {state: "ORLANDO NORTH - FL", price: 295, port: 7},
    {state: "ORLANDO SOUTH - FL", price: 370, port: 2},
    {state: "Orleans - VT", price: 620, port: 1},
    {state: "Paducah - KY", price: 495, port: 5},
    {state: "PASCO - WA", price: 470, port: 6},
    {state: "PENNSBURG PA", price: 320, port: 1},
    {state: "PENSACOLA (FL)", price: 495, port: 7},
    {state: "Pensacola FL", price: 445, port: 2},
    {state: "PEORIA-IL", price: 345, port: 5},
    {state: "Permian Basin - TX", price: 520, port: 3},
    {state: "PHILADELPHIA - PA", price: 300, port: 1},
    {state: "PHILADELPHIA EAST", price: 300, port: 1},
    {state: "PHILADELPHIA EAST - SUBLOT - PA", price: 270, port: 1},
    {state: "PHOENIX - AZ", price: 420, port: 4},
    {state: "PITTSBURG SOUTH - PA", price: 545, port: 1},
    {state: "PITTSBURGH EAST - PA", price: 545, port: 1},
    {state: "PITTSBURGH NORTH - PA", price: 545, port: 1},
    {state: "PITTSBURGH WEST - PA", price: 545, port: 1},
    {state: "Port Murray - NJ", price: 320, port: 1},
    {state: "Portage WI", price: 425, port: 5},
    {state: "PORTLAND (OR)", price: 470, port: 6},
    {state: "PORTLAND GORHAM (ME)", price: 520, port: 1},
    {state: "PORTLAND NORTH - OR", price: 470, port: 6},
    {state: "PORTLAND SOUTH - OR", price: 470, port: 6},
    {state: "Providence - RI", price: 445, port: 1},
    {state: "PULASKI - TN", price: 520, port: 1},
    {state: "PUNTA GORDA - FL", price: 320, port: 7},
    {state: "PUYALLUP (WA)", price: 300, port: 6},
    {state: "RALEIGH - NC", price: 370, port: 2},
    {state: "RALEIGH NORTH-NC", price: 395, port: 2},
    {state: "RANCHO CUCAMONGA - CA", price: 270, port: 4},
    {state: "RAPID CITY - SD", price: 720, port: 5},
    {state: "REDDING - CA", price: 595, port: 4},
    {state: "RENO - NV", price: 620, port: 4},
    {state: "RICHMOND - VA", price: 470, port: 1},
    {state: "RICHMOND EAST-VA", price: 470, port: 1},
    {state: "Roanoke (VA)", price: 520, port: 1},
    {state: "ROCHESTER - NY", price: 470, port: 1},
    {state: "RUTLAND - VT", price: 670, port: 1},
    {state: "SACRAMENTO - CA", price: 445, port: 4},
    {state: "SAINT LOUIS MO", price: 420, port: 5},
    {state: "SALT LAKE CITY - UT", price: 545, port: 4},
    {state: "SAN ANTONIO - TX", price: 345, port: 3},
    {state: "San Antonio-South - TX", price: 345, port: 3},
    {state: "SAN BERNARDINO- CA", price: 270, port: 4},
    {state: "SAN DIEGO - CA", price: 370, port: 4},
    {state: "SAN JOSE - CA", price: 495, port: 4},
    {state: "SAN MARTIN-CA", price: 470, port: 4},
    {state: "SANTA PAULA CA", price: 270, port: 4},
    {state: "SAVANNAH - GA", price: 195, port: 2},
    {state: "SAYREVILLE (NJ)", price: 270, port: 1},
    {state: "SCRANTON - PA", price: 345, port: 1},
    {state: "Scranton PA", price: 345, port: 1},
    {state: "SEAFORD - DE", price: 370, port: 1},
    {state: "SEATTLE (WA)", price: 220, port: 6},
    {state: "SHADY SPRING-VW", price: 545, port: 2},
    {state: "SHREVEPORT - LA", price: 345, port: 3},
    {state: "SIKESTON - MO", price: 495, port: 5},
    {state: "SIOUX FALLS (SD)", price: 645, port: 5},
    {state: "SO SACRAMENTO - CA", price: 495, port: 4},
    {state: "SOMERVILLE - NJ", price: 245, port: 1},
    {state: "SOUTH BEND (IN)", price: 370, port: 5},
    {state: "SOUTH BOSTON - MA", price: 420, port: 1},
    {state: "SOUTHERN ILLINOIS - IL", price: 545, port: 5},
    {state: "SOUTHERN NEW JERSEY", price: 345, port: 1},
    {state: "SPANAWAY WA", price: 295, port: 6},
    {state: "SPARTANBURG - SC", price: 370, port: 2},
    {state: "Specialty Division IL", price: 420, port: 5},
    {state: "SPOKANE - WA", price: 420, port: 6},
    {state: "SPRINGFIELD - MO", price: 520, port: 5},
    {state: "ST. CLOUD - MN", price: 495, port: 5},
    {state: "ST. LOUIS - MO", price: 420, port: 5},
    {state: "STATEN ISLAND NY", price: 320, port: 1},
    {state: "Suffolk VA", price: 445, port: 1},
    {state: "SUN VALLEY - CA", price: 270, port: 4},
    {state: "SYRACUSE - NY", price: 390, port: 1},
    {state: "TALLAHASSEE - FL", price: 395, port: 2},
    {state: "Tampa - FL", price: 400, port: 2},
    {state: "Tampa North - FL", price: 400, port: 2},
    {state: "TAMPA SOUTH - FL", price: 400, port: 2},
    {state: "TANNER - AL", price: 500, port: 2},
    {state: "TAUNTON (MA)", price: 445, port: 1},
    {state: "TAYLOR TX", price: 395, port: 3},
    {state: "TEMPLETON (MA)", price: 420, port: 1},
    {state: "THONOTOSASSA FL", price: 420, port: 7},
    {state: "TIDEWATER (VA)", price: 470, port: 1},
    {state: "TIFTON - GA", price: 320, port: 2},
    {state: "TRENTON - NJ", price: 295, port: 1},
    {state: "TUCSON - AZ", price: 445, port: 4},
    {state: "TULSA - OK", price: 595, port: 3},
    {state: "VALLEJO - CA", price: 520, port: 4},
    {state: "VAN NUYS - CA", price: 270, port: 4},
    {state: "WACO - TX", price: 370, port: 3},
    {state: "WALTON - KY", price: 420, port: 4},
    {state: "WASHINGTON DC - MD", price: 395, port: 1},
    {state: "WAYLAND - MI", price: 450, port: 5},
    {state: "WEST MIFFLIN PA", price: 570, port: 1},
    {state: "WEST PALM BEACH - FL", price: 270, port: 7},
    {state: "WEST WARREN MA", price: 395, port: 1},
    {state: "Western Colorado - CO", price: 720, port: 5},
    {state: "WHEELING IL", price: 245, port: 5},
    {state: "WHITE MARSH MD", price: 420, port: 1},
    {state: "WICHITA - KS", price: 620, port: 3},
    {state: "Wilmington (NC)", price: 420, port: 2},
    {state: "WINDHAM (ME)", price: 520, port: 1},
    {state: "YORK HAVEN - PA", price: 370, port: 1},
    {state: "Calgary CA (Copart)", price: 1600, port: 8},
    {state: "Calgary CA (Impact)", price: 1500, port: 8},
    {state: "Edmonton CA (Copart)", price: 1600, port: 8},
    {state: "Edmonton CA (Impact)", price: 1500, port: 8},
    {state: "Halifax CA (Copart)", price: 1250, port: 8},
    {state: "Halifax CA (Impact)", price: 825, port: 8},
    {state: "Hamilton (CANADA)", price: 510, port: 8},
    {state: "Kenora", price: 1100, port: 8},
    {state: "London (CANADA)", price: 550, port: 8},
    {state: "Manitoba", price: 1200, port: 8},
    {state: "Moncton CA (Copart)", price: 1325, port: 8},
    {state: "MONCTON CA (Impact)", price: 725, port: 8},
    {state: "Montreal CA (Copart)", price: 600, port: 8},
    {state: "Montreal CA (Impact)", price: 250, port: 8},
    {state: "Ottawa CA (Copart)", price: 600, port: 8},
    {state: "Ottawa CA (Impact)", price: 325, port: 8},
    {state: "QUEBEC CITI CA (Copart)", price: 600, port: 8},
    {state: "QUEBEC CITY CA (Impact)", price: 350, port: 8},
    {state: "Rivieredu LOUP/QC CA (Copart)", price: 1200, port: 8},
    {state: "Rivieredu Loup/QC CA (Impact)", price: 750, port: 8},
    {state: "Saskatoon (CANADA)", price: 1500, port: 8},
    {state: "St Filibere/QC (CANADA)", price: 600, port: 8},
    {state: "ST JOHNS CA (Copart)", price: 2100, port: 8},
    {state: "St Johns Newfoundland CA (Impact)", price: 1500, port: 8},
    {state: "Stouffville", price: 450, port: 8},
    {state: "Sudbury (CANADA)", price: 750, port: 8},
    {state: "Toronto (CANADA)", price: 600, port: 8},
    {state: "Vancouver (CANADA)", price: 2150, port: 8},
    {state: "Winchester CA (Copart)", price: 600, port: 8},
    {state: "Winchester CA (Impact)", price: 325, port: 8},
    {state: "Winnipeg", price: 1500, port: 8}
];

let america_state = 0;
let america_fuel = 0;
let europe_country = 0;
let europe_fuel = 0;

const calc_USA = document.querySelector('.calculate-wrapper.USA');
const calc_EUROPE = document.querySelector('.calculate-wrapper.Europe');

function tabsInit() {
    const tabsItems = document.querySelectorAll('.tabs-wrapper .item');
    tabsItems.forEach((tab, i) => {
        tab.addEventListener('click', () => {
            tabsItems.forEach(item => item.classList.remove('active'));
            tab.classList.add('active');
            if (i === 0) {
                calc_EUROPE.classList.add('active-calc');
                calc_USA.classList.remove('active-calc');
            } else {
                calc_USA.classList.add('active-calc');
                calc_EUROPE.classList.remove('active-calc');
            }
        });
    });
}

function selects() {
    const selects = document.querySelectorAll('.select-wrapper');

    document.addEventListener('click', () => {
        document.querySelectorAll('.select-wrapper .variables').forEach(v => v.classList.remove('active'));
    });

    selects.forEach(select => {
        const label = select.querySelector('.current-label');
        const variables = select.querySelector('.variables');
        const items = variables.querySelectorAll('.item');

        select.addEventListener('click', (e) => {
            if (!e.target.closest('.variables')) {
                e.stopPropagation();
                document.querySelectorAll('.select-wrapper .variables').forEach(v => {
                    if (v !== variables) v.classList.remove('active');
                });
                variables.classList.toggle('active');
            }
        });

        items.forEach((item, i) => {
            item.addEventListener('click', (e) => {
                e.stopPropagation();
                label.textContent = item.textContent;
                variables.classList.remove('active');

                if (variables.classList.contains('state-USA')) america_state = i;
                if (variables.classList.contains('fuel-USA')) america_fuel = i;
                if (variables.classList.contains('country-Europe')) europe_country = i;
                if (variables.classList.contains('fuel-Europe')) europe_fuel = i;
            });
        });
    });
}

function getContainerPrice(port) {
    if (port === 1) return 650;
    if (port === 2) return 700;
    if (port === 3) return 800;
    if (port === 4) return 1200;
    if (port === 5) return 850;
    if (port === 6) return 750;
    if (port === 7) return 1350;
    if (port === 8) return 1200;
    return 0;
}

function getAuctionAmerica(price) {
    let fee1 = 0;
    let fee2 = 0;

    if (price >= 0 && price <= 99.99) fee1 = 1;
    else if (price <= 199.99) fee1 = 25;
    else if (price <= 299.99) fee1 = 50;
    else if (price <= 399.99) fee1 = 75;
    else if (price <= 499.99) fee1 = 110;
    else if (price <= 549.99) fee1 = 125;
    else if (price <= 599.99) fee1 = 130;
    else if (price <= 699.99) fee1 = 140;
    else if (price <= 799.99) fee1 = 155;
    else if (price <= 899.99) fee1 = 170;
    else if (price <= 999.99) fee1 = 185;
    else if (price <= 1199.99) fee1 = 200;
    else if (price <= 1299.99) fee1 = 225;
    else if (price <= 1399.99) fee1 = 240;
    else if (price <= 1499.99) fee1 = 250;
    else if (price <= 1599.99) fee1 = 260;
    else if (price <= 1699.99) fee1 = 275;
    else if (price <= 1799.99) fee1 = 285;
    else if (price <= 1999.99) fee1 = 300;
    else if (price <= 2399.99) fee1 = 325;
    else if (price <= 2499.99) fee1 = 335;
    else if (price <= 2999.99) fee1 = 350;
    else if (price <= 3499.99) fee1 = 400;
    else if (price <= 3999.99) fee1 = 455;
    else if (price <= 4499.99) fee1 = 600;
    else if (price <= 5999.99) fee1 = 625;
    else if (price <= 7499.99) fee1 = 675;
    else if (price <= 7999.99) fee1 = 690;
    else if (price <= 9999.99) fee1 = 715;
    else if (price <= 14999.99) fee1 = 720;
    else fee1 = price * 5.75 / 100;

    if (price >= 0 && price <= 99.99) fee2 = 0;
    else if (price <= 499.99) fee2 = 49;
    else if (price <= 999.99) fee2 = 59;
    else if (price <= 1499.99) fee2 = 79;
    else if (price <= 1999.99) fee2 = 89;
    else if (price <= 3999.99) fee2 = 99;
    else if (price <= 5999.99) fee2 = 109;
    else if (price <= 7999.99) fee2 = 139;
    else fee2 = 149;

    return fee1 + fee2 + 10 + 50 + 69;
}

function getClearance(basePrice, yearRelease, engineCapacity, fuelType) {
    if (fuelType === 2) return engineCapacity;

    let basicExcise = 0;
    if (fuelType === 0) basicExcise = engineCapacity <= 3000 ? 50 : 100;
    if (fuelType === 1) basicExcise = engineCapacity <= 3500 ? 75 : 150;

    let coeffYear = new Date().getFullYear() - yearRelease;
    if (coeffYear < 1) coeffYear = 1;
    if (coeffYear > 15) coeffYear = 15;

    const excise = basicExcise * (engineCapacity / 1000) * coeffYear;
    const toll = basePrice * 0.1;
    const pdv = (basePrice + toll + excise) * 0.2;

    return toll + excise + pdv;
}

function USA() {
    const variablesState = calc_USA.querySelector('.variables.state-USA');
    statesInfo.forEach(item => {
        variablesState.innerHTML += `<div class="item">${item.state}</div>`;
    });

    const inputState = calc_USA.querySelector('.input-state-USA');
    inputState.addEventListener('input', () => {
        const items = variablesState.querySelectorAll('.item');
        items.forEach(item => {
            item.style.display = item.innerText.toLowerCase().includes(inputState.value.toLowerCase()) ? 'block' : 'none';
        });
    });

    const btnCalc = calc_USA.querySelector('.btn-calc-USA');
    btnCalc.addEventListener('click', () => {
        const priceInput = calc_USA.querySelector('#price-USA');
        const engineInput = calc_USA.querySelector('#engine-capacity-USA');
        const yearInput = calc_USA.querySelector('#year-USA');

        if (priceInput.value === '') return priceInput.focus();
        if (engineInput.value === '') return engineInput.focus();
        if (yearInput.value === '') return yearInput.focus();

        const carPrice = Number(priceInput.value);
        const yearRelease = Number(yearInput.value);
        const engineCapacity = Number(engineInput.value);
        const addressDelivery = calc_USA.querySelector('.switch-address-del input').checked;

        const auctionFee = getAuctionAmerica(carPrice);
        const deliveryPort = statesInfo[america_state].price + 150;
        const deliverySea = getContainerPrice(statesInfo[america_state].port) + 600;
        const unloadPort = 400;
        const deliveryKiev = 1400;
        const broker = 250;
        const service = 500;
        const button = 120;
        const priceSwift = 100 + (0.032 * (carPrice + auctionFee));
        const clearance = getClearance(carPrice + auctionFee + 1600, yearRelease, engineCapacity, america_fuel);
        const accompaniment = 0;
        const addressValue = addressDelivery ? 400 : 0;
        const allPrice = carPrice + auctionFee + deliveryPort + deliverySea + unloadPort + deliveryKiev + broker + service + accompaniment + button + clearance + priceSwift + addressValue;
        const paymentThree = auctionFee + carPrice + deliveryPort + deliverySea + priceSwift + 1000;

        const numerics = calc_USA.querySelectorAll('.card-item.outputs .item .numeric');
        numerics[0].innerText = (auctionFee + carPrice).toFixed(2);
        numerics[1].innerText = broker.toFixed(2);
        numerics[2].innerText = service.toFixed(2);
        numerics[3].innerText = deliveryPort.toFixed(2);
        numerics[4].innerText = deliverySea.toFixed(2);
        numerics[5].innerText = priceSwift.toFixed(2);
        numerics[6].innerText = clearance.toFixed(2);
        numerics[7].innerText = addressValue.toFixed(2);
        numerics[8].innerText = allPrice.toFixed(2);
        numerics[9].innerText = paymentThree.toFixed(2) + ' $';
    });
}

function EUROPE() {
    const collection = [700, 700, 700, 800, 800, 700, 900, 900, 900, 900];
    const crossBorder = [139, 99, 89, 185, 149, 139, 245, 149, 379, 189];
    const processingDocs = [249, 149, 269, 229, 259, 249, 229, 252, 189, 159];

    function calculate(type) {
        const priceInput = calc_EUROPE.querySelector('#price-Europe');
        const deliveryInput = calc_EUROPE.querySelector('#delivery-Europe');
        const yearInput = calc_EUROPE.querySelector('#year-Europe');
        const engineInput = calc_EUROPE.querySelector('#engine-capacity-Europe');

        if (priceInput.value === '') return priceInput.focus();
        if (deliveryInput.value === '') return deliveryInput.focus();
        if (type === 1 && yearInput.value === '') return yearInput.focus();
        if (type === 1 && engineInput.value === '') return engineInput.focus();

        const priceCar = Number(priceInput.value);
        const priceEurope = Number(deliveryInput.value);
        const yearRelease = Number(yearInput.value || 0);
        const engineCapacity = Number(engineInput.value || 0);
        const priceService = 550;
        const broker = 250;
        const certificate = 100;
        const priceCarAuction = priceCar + crossBorder[europe_country] + processingDocs[europe_country];
        const priceSwift = 100 + (0.032 * (priceCarAuction + collection[europe_country]));
        const buttonCC = calc_EUROPE.querySelector('.switch-button input').checked ? 250 : 0;
        const addressDelivery = calc_EUROPE.querySelector('.switch-address-del input').checked;
        const allPriceNoUK = priceCarAuction + priceEurope + broker + certificate + priceService + priceSwift + buttonCC;

        let priceUK = 1300;
        if (allPriceNoUK > 4000 && allPriceNoUK < 6000) priceUK = 1650;
        if (allPriceNoUK >= 6000) priceUK = 1800;

        const fee = (priceCarAuction + priceEurope + priceUK) * 0.005;
        const customsBase = priceCar + 300 + priceEurope;
        const customsclearance = type === 1 ? getClearance(customsBase, yearRelease, engineCapacity, europe_fuel) : 0;
        const addressValue = addressDelivery ? 400 : 0;
        const allPriceCar = allPriceNoUK + priceUK + 100 + fee + customsclearance + addressValue + (type === 1 ? 0 : -150);
        const paymentThree = priceCarAuction + priceEurope + priceUK + broker + 350 + priceSwift;

        const numerics = calc_EUROPE.querySelectorAll('.card-item.outputs .item .numeric');
        numerics[0].innerText = priceCarAuction.toFixed(2);
        numerics[1].innerText = priceEurope.toFixed(2);
        numerics[2].innerText = priceService.toFixed(2);
        numerics[3].innerText = priceSwift.toFixed(2);
        numerics[4].innerText = customsclearance.toFixed(2);
        numerics[5].innerText = addressValue.toFixed(2);
        numerics[6].innerText = allPriceCar.toFixed(2);
        numerics[7].innerText = paymentThree.toFixed(2) + ' €';
    }

    calc_EUROPE.querySelector('.btn-calc-Europe').addEventListener('click', () => calculate(1));
    calc_EUROPE.querySelector('.btn-calc-clearence-Europe').addEventListener('click', () => calculate(2));
}

addEventListener('load', () => {
    tabsInit();
    USA();
    EUROPE();
    selects();
});
