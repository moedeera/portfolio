// hello

const LinksDiv = document.getElementById("links");

const linkOpener = "https://executivesrealty.c21.ca";

const Revelstoke = [
  // 1
  {
    area: "Columbia Parks",
    link: "/search/#status=active&sold_days=180&pstatus=1%2C11&ls_conversion=acres&company_only=1&location_search_field=Columbia%20Park%20Drive%2C%20Revelstoke%2C%20BC&drive_time=09%3A00&drive_duration=15&drive_avoid_ferry=1&drive_departure=1&ss_locale=en-CA&ss_description=Columbia%20Park%20Dr%2C%20Revelstoke%2C%20BC%20V0E%202S0%2C%20Canada&ss_email_freq=40&ss_send_zero_result=1&bounds_north=51.05807129436762&bounds_east=-118.17123304350586&bounds_south=50.96551315332691&bounds_west=-118.28006635649415&center_lat=50.2670137&center_lon=-119.2720107&center_lat_pan=51.01181531419179&center_lon_pan=-118.2256497&user_lat=51.0117146&user_lon=-118.2249568&pgsize=20&startidx=0&zoom=13&sort_by=11&company_uuid=3341197&commute=0&buffer_miles=0.25&geospatial=false&agent_uuid=389f433d-052c-4cf1-a9c7-d81a7bbdb93b&ptype=1%2C2%2C8%2C9%2C4%2C3%2C5%2C7&searchType=criteria&omit_hidden=true&ex_pend=true&currency=CAD",
  },
  // 2
  {
    area: "Farwell FIelds",
    link: "",
  },
  // 3
  {
    area: "Mountain View",
    link: "/search/#status=active&sold_days=180&pstatus=1%2C11&ls_conversion=acres&company_only=1&location_search_field=Mountain%20View%20Drive%2C%20Revelstoke%2C%20BC&drive_time=09%3A00&drive_duration=15&drive_avoid_ferry=1&drive_departure=1&ss_locale=en-CA&ss_description=Mountain%20View%20Dr%2C%20Revelstoke%2C%20BC%20V0E%202S1%2C%20Canada&ss_email_freq=40&ss_send_zero_result=1&bounds_north=51.00355136750042&bounds_east=-118.15340027175291&bounds_south=50.95724095932139&bounds_west=-118.20781692824706&center_lat=50.2670137&center_lon=-119.2720107&center_lat_pan=50.980401937342556&center_lon_pan=-118.18060859999999&user_lat=50.9804454&user_lon=-118.1805467&pgsize=20&startidx=0&zoom=14&sort_by=11&company_uuid=3341197&commute=0&buffer_miles=0.25&geospatial=false&agent_uuid=389f433d-052c-4cf1-a9c7-d81a7bbdb93b&ptype=1%2C2%2C8%2C9%2C4%2C3%2C5%2C7&searchType=criteria&omit_hidden=true&ex_pend=true&currency=CAD",
  },
  // 4
  {
    area: "South Side",
    link: "",
  },
  // 5
  {
    area: "Arrow heights",
    link: "",
  },
  // 6
  {
    area: "Airport way",
    link: "/search/#status=active&sold_days=180&ls_conversion=acres&location_search_field=Airport%20Way%2C%20Revelstoke%2C%20BC&drive_time=09%3A00&drive_duration=15&drive_avoid_ferry=1&drive_departure=1&ss_locale=en-CA&ss_description=Airport%20Way%2C%20Revelstoke%2C%20BC%20V0E%2C%20Canada&ss_email_freq=40&ss_send_zero_result=1&bounds_north=51.154759822490334&bounds_east=-117.96237367402345&bounds_south=50.784191996854766&bounds_west=-118.39770692597658&center_lat=50.83994537631408&center_lon=-118.98927237090432&center_lat_pan=50.96984546901712&center_lon_pan=-118.18004030000002&user_lat=50.9707527&user_lon=-118.18152&pgsize=20&startidx=0&zoom=11&sort_by=11&company_uuid=3341197&commute=0&buffer_miles=0.25&geospatial=false&agent_uuid=389f433d-052c-4cf1-a9c7-d81a7bbdb93b&ptype=1%2C9%2C4%2C3%2C5%2C7%2C2%2C8&searchType=criteria&pstatus=1%2C2%2C11&omit_hidden=true&currency=CAD",
  },
  // 7
  {
    area: "Highway 23",
    link: "/search/#status=active&sold_days=180&ls_conversion=acres&location_search_field=Old%20Highway%2023%20Trail%2C%20Revelstoke%2C%20BC&drive_time=09%3A00&drive_duration=15&drive_avoid_ferry=1&drive_departure=1&ss_locale=en-CA&ss_description=Old%20Hwy%2023%20Trail%2C%20Revelstoke%2C%20BC%2C%20Canada&ss_email_freq=40&ss_send_zero_result=1&bounds_north=51.15385900576527&bounds_east=-117.97179307402344&bounds_south=50.783283964505344&bounds_west=-118.40712632597656&center_lat=50.83994537631408&center_lon=-118.98927237090432&center_lat_pan=50.96894104694671&center_lon_pan=-118.1894597&user_lat=50.9649477&user_lon=-118.1927419&pgsize=20&startidx=0&zoom=11&sort_by=11&company_uuid=3341197&commute=0&buffer_miles=0.25&geospatial=false&agent_uuid=389f433d-052c-4cf1-a9c7-d81a7bbdb93b&ptype=1%2C9%2C4%2C3%2C5%2C7%2C2%2C8&searchType=criteria&pstatus=1%2C2%2C11&omit_hidden=true&currency=CAD",
  },
  // 8
  {
    area: "",
    link: "",
  },
  // 9
  {
    area: "Big Eddy",
    link: "/search/#status=active&sold_days=180&ls_conversion=acres&location_search_field=Big%20Eddy%2C%20Revelstoke%2C%20BC&drive_time=09%3A00&drive_duration=15&drive_avoid_ferry=1&drive_departure=1&ss_locale=en-CA&ss_description=Big%20Eddy%2C%20Revelstoke%2C%20BC%20V0E%202S0%2C%20Canada&ss_email_freq=40&ss_send_zero_result=1&bounds_north=51.08684140147451&bounds_east=-118.08258395962422&bounds_south=50.90165534663799&bounds_west=-118.30025058560078&center_lat=50.997749&center_lon=-118.224907&center_lat_pan=50.994340747364184&center_lon_pan=-118.1914172726125&geotype=Neighborhood&user_lat=50.997749&user_lon=-118.224907&pgsize=20&startidx=0&zoom=12&sort_by=11&company_uuid=3341197&commute=0&buffer_miles=0.25&geospatial=true&agent_uuid=389f433d-052c-4cf1-a9c7-d81a7bbdb93b&ptype=1%2C9%2C4%2C3%2C5%2C7%2C2%2C8&searchType=criteria&pstatus=1%2C2%2C11&omit_hidden=true&currency=CAD",
  },
  // 10
  {
    area: "Resort",
    link: "",
  },
];
const Sicamous = [
  // 1
  {
    id: 1,
    area: "Solsqua/Cambie",
    link: "/search/#status=active&sold_days=180&ls_conversion=acres&location_search_field=Solsqua%20Sicamous%20Road%2C%20Sicamous%2C%20BC&drive_time=09%3A00&drive_duration=15&drive_avoid_ferry=1&drive_departure=1&ss_locale=en-CA&ss_description=Solsqua%20Sicamous%20Rd%2C%20Sicamous%2C%20BC%20V0E%2C%20Canada&ss_email_freq=40&ss_send_zero_result=1&bounds_north=50.89967234955728&bounds_east=-118.90453274350585&bounds_south=50.80679812358516&bounds_west=-119.01336605649414&center_lat=50.998115&center_lon=-118.195672&center_lat_pan=50.85325835378124&center_lon_pan=-118.9589494&user_lat=50.85341&user_lon=-118.9581475&pgsize=20&startidx=0&zoom=13&sort_by=11&company_uuid=3341197&commute=0&buffer_miles=0.25&geospatial=false&agent_uuid=389f433d-052c-4cf1-a9c7-d81a7bbdb93b&ptype=1%2C9%2C4%2C3%2C5%2C7%2C2%2C8&searchType=criteria&pstatus=1%2C2%2C11&omit_hidden=true&currency=CAD",
  },
  //2
  {
    id: 2,
    area: "Swansea Point",
    link: "/search/#status=active&sold_days=180&ls_conversion=acres&location_search_field=Swansea%20Point%2C%20BC&drive_time=09%3A00&drive_duration=15&drive_avoid_ferry=1&drive_departure=1&ss_locale=en-CA&ss_description=Swansea%20Point%2C%20BC%20V0E%202K2%2C%20Canada&ss_email_freq=40&ss_send_zero_result=1&bounds_north=51.76622457433038&bounds_east=-117.88862981849375&bounds_south=50.28591666123743&bounds_west=-119.62996282630625&center_lat=50.766714&center_lon=-119.007147&center_lat_pan=51.03198057409805&center_lon_pan=-118.7592963224&geotype=PopulatedPlace&user_lat=50.766714&user_lon=-119.007147&pgsize=20&startidx=0&zoom=9&sort_by=11&company_uuid=3341197&commute=0&buffer_miles=0.25&geospatial=true&agent_uuid=389f433d-052c-4cf1-a9c7-d81a7bbdb93b&ptype=1%2C9%2C4%2C3%2C5%2C7%2C2%2C8&searchType=criteria&pstatus=1%2C2%2C11&omit_hidden=true&currency=CAD",
  },
  //3
  {
    id: 3,
    area: "Mara Lake",
    link: "/search/#status=active&sold_days=180&ls_conversion=acres&location_search_field=Mara%20Lake%20Lane%2C%20Sicamous%2C%20BC&drive_time=09%3A00&drive_duration=15&drive_avoid_ferry=1&drive_departure=1&ss_locale=en-CA&ss_description=Mara%20Lake%20Ln%2C%20Sicamous%2C%20BC%20V0E%202V1%2C%20Canada&ss_email_freq=40&ss_send_zero_result=1&bounds_north=50.84462212970653&bounds_east=-118.94547667175291&bounds_south=50.79815330006828&bounds_west=-118.99989332824705&center_lat=50.766714&center_lon=-119.007147&center_lat_pan=50.82139349551915&center_lon_pan=-118.97268499999998&user_lat=50.8215159&user_lon=-118.9726371&pgsize=20&startidx=0&zoom=14&sort_by=11&company_uuid=3341197&commute=0&buffer_miles=0.25&geospatial=false&agent_uuid=389f433d-052c-4cf1-a9c7-d81a7bbdb93b&ptype=1%2C9%2C4%2C3%2C5%2C7%2C2%2C8&searchType=criteria&pstatus=1%2C2%2C11&omit_hidden=true&currency=CAD",
  },
  //4
  {
    id: 4,
    area: "Grinrod",
    link: "/search/#status=active&sold_days=180&ls_conversion=acres&location_search_field=Grindrod%2C%20BC&drive_time=09%3A00&drive_duration=15&drive_avoid_ferry=1&drive_departure=1&ss_locale=en-CA&ss_description=Grindrod%2C%20BC%20V0E%201Y0%2C%20Canada&ss_email_freq=40&ss_send_zero_result=1&bounds_north=51.42970687496339&bounds_east=-117.85453570901625&bounds_south=49.93850419025899&bounds_west=-119.59586871682875&center_lat=50.628095&center_lon=-119.123451&center_lat_pan=50.69003013699056&center_lon_pan=-118.7252022129225&geotype=PopulatedPlace&user_lat=50.628095&user_lon=-119.123451&pgsize=20&startidx=0&zoom=9&sort_by=11&company_uuid=3341197&commute=0&buffer_miles=0.25&geospatial=true&agent_uuid=389f433d-052c-4cf1-a9c7-d81a7bbdb93b&ptype=1%2C9%2C4%2C3%2C5%2C7%2C2%2C8&searchType=criteria&pstatus=1%2C2%2C11&omit_hidden=true&currency=CAD",
  },
  //5
  {
    id: 5,
    area: "Shuswap",
    link: "/search/#status=active&sold_days=180&ls_conversion=acres&location_search_field=Shuswap%2C%20BC&drive_time=09%3A00&drive_duration=15&drive_avoid_ferry=1&drive_departure=1&ss_locale=en-CA&ss_description=Shuswap%20Lake%2C%20Columbia-Shuswap%2C%20BC%2C%20Canada&ss_email_freq=40&ss_send_zero_result=1&bounds_north=51.22922821890991&bounds_east=-118.85326141903886&bounds_south=50.48632736701023&bounds_west=-119.72392792294511&center_lat=50.9465204&center_lon=-119.2586177&center_lat_pan=50.85925721237203&center_lon_pan=-119.28859467099198&geotype=Neighborhood&user_lat=50.9465204&user_lon=-119.2586177&pgsize=20&startidx=0&zoom=10&sort_by=11&company_uuid=3341197&commute=0&buffer_miles=0.25&geospatial=true&agent_uuid=389f433d-052c-4cf1-a9c7-d81a7bbdb93b&ptype=1%2C9%2C4%2C3%2C5%2C7%2C2%2C8&searchType=criteria&pstatus=1%2C2%2C11&omit_hidden=true&currency=CAD",
  },
  // 6
  {
    id: 6,
    area: "Ashton Creek",
    link: "/search/#status=active&sold_days=180&ls_conversion=acres&location_search_field=Ashton%20Creek%2C%20BC&drive_time=09%3A00&drive_duration=15&drive_avoid_ferry=1&drive_departure=1&ss_locale=en-CA&ss_description=Ashton%20Creek%2C%20BC%20V0E%201V5%2C%20Canada&ss_email_freq=40&ss_send_zero_result=1&bounds_north=51.42970687496339&bounds_east=-117.85453570901625&bounds_south=49.93850419025899&bounds_west=-119.59586871682875&center_lat=50.555859&center_lon=-119.014228&center_lat_pan=50.69003013699056&center_lon_pan=-118.7252022129225&geotype=PopulatedPlace&user_lat=50.555859&user_lon=-119.014228&pgsize=20&startidx=0&zoom=9&sort_by=11&company_uuid=3341197&commute=0&buffer_miles=0.25&geospatial=true&agent_uuid=389f433d-052c-4cf1-a9c7-d81a7bbdb93b&ptype=1%2C9%2C4%2C3%2C5%2C7%2C2%2C8&searchType=criteria&pstatus=1%2C2%2C11&omit_hidden=true&currency=CAD",
  },
  // 7
  {
    id: 7,
    area: "Enderby",
    link: "/search/#status=active&sold_days=180&ls_conversion=acres&location_search_field=Enderby%2C%20BC&drive_time=09%3A00&drive_duration=15&drive_avoid_ferry=1&drive_departure=1&ss_locale=en-CA&ss_description=Enderby%2C%20BC%2C%20Canada&ss_email_freq=40&ss_send_zero_result=1&bounds_north=50.60371872885497&bounds_east=-119.08890514744235&bounds_south=50.510255837413204&bounds_west=-119.19773846043063&center_lat=50.5508499&center_lon=-119.1396705&center_lat_pan=50.55701044864141&center_lon_pan=-119.14332180393649&geotype=PopulatedPlace&user_lat=50.5508499&user_lon=-119.1396705&pgsize=20&startidx=0&zoom=13&sort_by=11&company_uuid=3341197&commute=0&buffer_miles=0.25&geospatial=true&agent_uuid=389f433d-052c-4cf1-a9c7-d81a7bbdb93b&ptype=1%2C9%2C4%2C3%2C5%2C7%2C2%2C8&searchType=criteria&pstatus=1%2C2%2C11&omit_hidden=true&currency=CAD",
  },
  //8
  {
    id: 8,
    area: "Trinity Valley",
    link: "/search/#status=active&sold_days=180&ls_conversion=acres&location_search_field=Trinity%20Valley%2C%20BC&drive_time=09%3A00&drive_duration=15&drive_avoid_ferry=1&drive_departure=1&ss_locale=en-CA&ss_description=Trinity%20Valley%2C%20BC%20V0E%202G4%2C%20Canada&ss_email_freq=40&ss_send_zero_result=1&bounds_north=50.89974921242941&bounds_east=-118.10895288709476&bounds_south=49.39149868480218&bounds_west=-119.85028589490726&center_lat=50.4&center_lon=-118.916667&center_lat_pan=50.15156990692871&center_lon_pan=-118.97961939100101&geotype=PopulatedPlace&user_lat=50.4&user_lon=-118.916667&pgsize=20&startidx=0&zoom=9&sort_by=11&company_uuid=3341197&commute=0&buffer_miles=0.25&geospatial=true&agent_uuid=389f433d-052c-4cf1-a9c7-d81a7bbdb93b&ptype=1%2C9%2C4%2C3%2C5%2C7%2C2%2C8&searchType=criteria&pstatus=1%2C2%2C11&omit_hidden=true&currency=CAD",
  },
  //9
  {
    id: 9,
    area: "Malakwa",
    link: "/search/#status=active&sold_days=180&ls_conversion=acres&location_search_field=Malakwa%2C%20BC&drive_time=09%3A00&drive_duration=15&drive_avoid_ferry=1&drive_departure=1&ss_locale=en-CA&ss_description=Malakwa%2C%20BC%20V0E%202J0%2C%20Canada&ss_email_freq=40&ss_send_zero_result=1&bounds_north=51.76622457433038&bounds_east=-117.88862981849375&bounds_south=50.28591666123743&bounds_west=-119.62996282630625&center_lat=50.938046&center_lon=-118.794475&center_lat_pan=51.03198057409805&center_lon_pan=-118.7592963224&geotype=PopulatedPlace&user_lat=50.938046&user_lon=-118.794475&pgsize=20&startidx=0&zoom=9&sort_by=11&company_uuid=3341197&commute=0&buffer_miles=0.25&geospatial=true&agent_uuid=389f433d-052c-4cf1-a9c7-d81a7bbdb93b&ptype=1%2C9%2C4%2C3%2C5%2C7%2C2%2C8&searchType=criteria&pstatus=1%2C2%2C11&omit_hidden=true&currency=CAD",
  },
  //10
  {
    id: 10,
    area: "Sicamous",
    link: "/search/#status=active&sold_days=180&ls_conversion=acres&location_search_field=Sicamous%2C%20BC&drive_time=09%3A00&drive_duration=15&drive_avoid_ferry=1&drive_departure=1&ss_locale=en-CA&ss_description=Sicamous%2C%20BC%2C%20Canada&ss_email_freq=40&ss_send_zero_result=1&bounds_north=50.87506359247269&bounds_east=-118.92478588637584&bounds_south=50.78214032358649&bounds_west=-119.03361919936413&center_lat=50.8378243&center_lon=-118.9768156&center_lat_pan=50.82862507934988&center_lon_pan=-118.97920254286998&geotype=AdminDivision3&user_lat=50.8378243&user_lon=-118.9768156&pgsize=20&startidx=0&zoom=13&sort_by=11&company_uuid=3341197&commute=0&buffer_miles=0.25&geospatial=true&agent_uuid=389f433d-052c-4cf1-a9c7-d81a7bbdb93b&ptype=1%2C9%2C4%2C3%2C5%2C7%2C2%2C8&searchType=criteria&pstatus=1%2C2%2C11&omit_hidden=true&currency=CAD",
  },
];
const Vernon = [
  //1
  {
    id: 1,
    area: "Lake Country",
    link: "/search/#status=active&sold_days=180&ls_conversion=acres&location_search_field=Lake%20Country%2C%20BC&drive_time=09%3A00&drive_duration=15&drive_avoid_ferry=1&drive_departure=1&ss_locale=en-CA&ss_description=Lake%20Country%2C%20BC%2C%20Canada&ss_email_freq=40&ss_send_zero_result=1&bounds_north=50.26664612936036&bounds_east=-119.16042868925192&bounds_south=49.889009725028735&bounds_west=-119.59576194120504&center_lat=50.0536782&center_lon=-119.4106448&center_lat_pan=50.07819973931922&center_lon_pan=-119.37809531522848&geotype=AdminDivision3&user_lat=50.0536782&user_lon=-119.4106448&pgsize=20&startidx=0&zoom=11&sort_by=11&company_uuid=3341197&commute=0&buffer_miles=0.25&geospatial=true&agent_uuid=389f433d-052c-4cf1-a9c7-d81a7bbdb93b&ptype=1%2C9%2C4%2C3%2C5%2C7%2C2%2C8&searchType=criteria&pstatus=1%2C2%2C11&omit_hidden=true&currency=CAD",
  },
  //2
  {
    id: 2,
    area: "Coldstream",
    link: "/search/#status=active&sold_days=180&ls_conversion=acres&location_search_field=Coldstream%2C%20BC&drive_time=09%3A00&drive_duration=15&drive_avoid_ferry=1&drive_departure=1&ss_locale=en-CA&ss_description=Coldstream%2C%20BC%2C%20Canada&ss_email_freq=40&ss_send_zero_result=1&bounds_north=50.411788608837156&bounds_east=-118.95545769115593&bounds_south=50.035301175652684&bounds_west=-119.39079094310905&center_lat=50.223641&center_lon=-119.228205&center_lat_pan=50.22391636077649&center_lon_pan=-119.17312431713249&geotype=AdminDivision3&user_lat=50.223641&user_lon=-119.228205&pgsize=20&startidx=0&zoom=11&sort_by=11&company_uuid=3341197&commute=0&buffer_miles=0.25&geospatial=true&agent_uuid=389f433d-052c-4cf1-a9c7-d81a7bbdb93b&ptype=1%2C9%2C4%2C3%2C5%2C7%2C2%2C8&searchType=criteria&pstatus=1%2C2%2C11&omit_hidden=true&currency=CAD",
  },
  //3
  {
    id: 3,
    area: "Lumba Valley",
    link: "/search/#status=active&sold_days=180&ls_conversion=acres&location_search_field=Lumby%2C%20BC&drive_time=09%3A00&drive_duration=15&drive_avoid_ferry=1&drive_departure=1&ss_locale=en-CA&ss_description=Lumby%2C%20BC%20V0E%2C%20Canada&ss_email_freq=40&ss_send_zero_result=1&bounds_north=50.29711977158329&bounds_east=-118.91381189668684&bounds_south=50.20304967847318&bounds_west=-119.02264520967512&center_lat=50.250699&center_lon=-118.967831&center_lat_pan=50.25010793795733&center_lon_pan=-118.96822855318098&geotype=PopulatedPlace&user_lat=50.250699&user_lon=-118.967831&pgsize=20&startidx=0&zoom=13&sort_by=11&company_uuid=3341197&commute=0&buffer_miles=0.25&geospatial=true&agent_uuid=389f433d-052c-4cf1-a9c7-d81a7bbdb93b&ptype=1%2C9%2C4%2C3%2C5%2C7%2C2%2C8&searchType=criteria&pstatus=1%2C2%2C11&omit_hidden=true&currency=CAD",
  },
  //4
  {
    id: 4,
    area: "Predator Ridge",
    link: "/search/#status=active&sold_days=180&ls_conversion=acres&location_search_field=Predator%20Ridge%20Drive%2C%20Vernon%2C%20BC&drive_time=09%3A00&drive_duration=15&drive_avoid_ferry=1&drive_departure=1&ss_locale=en-CA&ss_description=Predator%20Ridge%20Dr%2C%20Vernon%2C%20BC%20V1H%2C%20Canada&ss_email_freq=40&ss_send_zero_result=1&bounds_north=50.28043471371638&bounds_east=-119.28568988701171&bounds_south=50.092042815121076&bounds_west=-119.50335651298828&center_lat=50.250699&center_lon=-118.967831&center_lat_pan=50.186331654160895&center_lon_pan=-119.3945232&user_lat=50.1858772&user_lon=-119.3916516&pgsize=20&startidx=0&zoom=12&sort_by=11&company_uuid=3341197&commute=0&buffer_miles=0.25&geospatial=false&agent_uuid=389f433d-052c-4cf1-a9c7-d81a7bbdb93b&ptype=1%2C9%2C4%2C3%2C5%2C7%2C2%2C8&searchType=criteria&pstatus=1%2C2%2C11&omit_hidden=true&currency=CAD",
  },
  //5
  {
    id: 5,
    area: "Silver STar Road/ Resort?",
    link: "/search/#status=active&sold_days=180&ls_conversion=acres&location_search_field=Silver%20Star%20Road%2C%20Vernon%2C%20BC&drive_time=09%3A00&drive_duration=15&drive_avoid_ferry=1&drive_departure=1&ss_locale=en-CA&ss_description=Silver%20Star%20Rd%2C%20Vernon%2C%20BC%20V1B%2C%20Canada&ss_email_freq=40&ss_send_zero_result=1&bounds_north=50.6704876913718&bounds_east=-118.79504949804686&bounds_south=49.91865041596114&bounds_west=-119.66571600195311&center_lat=50.250699&center_lon=-118.967831&center_lat_pan=50.2960542189896&center_lon_pan=-119.23038274999999&user_lat=50.2972129&user_lon=-119.2240258&pgsize=20&startidx=0&zoom=10&sort_by=11&company_uuid=3341197&commute=0&buffer_miles=0.25&geospatial=false&agent_uuid=389f433d-052c-4cf1-a9c7-d81a7bbdb93b&ptype=1%2C9%2C4%2C3%2C5%2C7%2C2%2C8&searchType=criteria&pstatus=1%2C2%2C11&omit_hidden=true&currency=CAD",
  },
  //6
  {
    id: 6,
    area: "South Vernon",
    link: "/search/#status=active&sold_days=180&ls_conversion=acres&location_search_field=South%20Vernon%2C%20Vernon%2C%20BC&drive_time=09%3A00&drive_duration=15&drive_avoid_ferry=1&drive_departure=1&ss_locale=en-CA&ss_description=South%20Vernon%2C%20Vernon%2C%20BC%20V1T%209R7%2C%20Canada&ss_email_freq=40&ss_send_zero_result=1&center_lat=50.249529&center_lon=-119.303962&center_lat_pan=50.250701197975026&center_lon_pan=-118.967831&geotype=Neighborhood&user_lat=50.249529&user_lon=-119.303962&pgsize=20&startidx=0&zoom=14&sort_by=11&company_uuid=3341197&commute=0&buffer_miles=0.25&geospatial=true&agent_uuid=389f433d-052c-4cf1-a9c7-d81a7bbdb93b&ptype=1%2C9%2C4%2C3%2C5%2C7%2C2%2C8&searchType=criteria&pstatus=1%2C2%2C11&omit_hidden=true&currency=CAD",
  },
  //7
  {
    id: 7,
    area: "Vernon city",
    link: "/search/#status=active&sold_days=180&ls_conversion=acres&location_search_field=Vernon%2C%20BC&drive_time=09%3A00&drive_duration=15&drive_avoid_ferry=1&drive_departure=1&ss_locale=en-CA&ss_description=Vernon%2C%20BC%2C%20Canada&ss_email_freq=40&ss_send_zero_result=1&bounds_north=50.42420214048794&bounds_east=-119.11008287020195&bounds_south=50.047813088404475&bounds_west=-119.54541612215507&center_lat=50.2670137&center_lon=-119.2720107&center_lat_pan=50.23637905314507&center_lon_pan=-119.32774949617851&geotype=PopulatedPlace&user_lat=50.2670137&user_lon=-119.2720107&pgsize=20&startidx=0&zoom=11&sort_by=11&company_uuid=3341197&commute=0&buffer_miles=0.25&geospatial=true&agent_uuid=389f433d-052c-4cf1-a9c7-d81a7bbdb93b&ptype=1%2C9%2C4%2C3%2C5%2C7%2C2%2C8&searchType=criteria&pstatus=1%2C2%2C11&omit_hidden=true&currency=CAD",
  },
  //8
  {
    id: 8,
    area: "Armstrong",
    link: "/search/#status=active&sold_days=180&ls_conversion=acres&location_search_field=Armstrong%2C%20BC&drive_time=09%3A00&drive_duration=15&drive_avoid_ferry=1&drive_departure=1&ss_locale=en-CA&ss_description=Armstrong%2C%20BC%20V0E%2C%20Canada&ss_email_freq=40&ss_send_zero_result=1&bounds_north=50.48974560493068&bounds_east=-119.14422530738837&bounds_south=50.39605668186346&bounds_west=-119.25305862037665&center_lat=50.4476983&center_lon=-119.1969938&center_lat_pan=50.442924326843446&center_lon_pan=-119.19864196388251&geotype=PopulatedPlace&user_lat=50.4476983&user_lon=-119.1969938&pgsize=20&startidx=0&zoom=13&sort_by=11&company_uuid=3341197&commute=0&buffer_miles=0.25&geospatial=true&agent_uuid=389f433d-052c-4cf1-a9c7-d81a7bbdb93b&ptype=1%2C9%2C4%2C3%2C5%2C7%2C2%2C8&searchType=criteria&pstatus=1%2C2%2C11&omit_hidden=true&currency=CAD",
  },
  //9
  {
    id: 9,
    area: "West Kelowna",
    link: "/search/#status=active&sold_days=180&ls_conversion=acres&location_search_field=West%20Kelowna%2C%20BC&drive_time=09%3A00&drive_duration=15&drive_avoid_ferry=1&drive_departure=1&ss_locale=en-CA&ss_description=West%20Kelowna%2C%20BC%2C%20Canada&ss_email_freq=40&ss_send_zero_result=1&bounds_north=50.06117137267762&bounds_east=-119.40621104644744&bounds_south=49.68191259197821&bounds_west=-119.84154429840056&center_lat=49.863612&center_lon=-119.5644584&center_lat_pan=49.871914264413824&center_lon_pan=-119.623877672424&geotype=PopulatedPlace&user_lat=49.863612&user_lon=-119.5644584&pgsize=20&startidx=0&zoom=11&sort_by=11&company_uuid=3341197&commute=0&buffer_miles=0.25&geospatial=true&agent_uuid=389f433d-052c-4cf1-a9c7-d81a7bbdb93b&ptype=1%2C9%2C4%2C3%2C5%2C7%2C2%2C8&searchType=criteria&pstatus=1%2C2%2C11&omit_hidden=true&currency=CAD",
  },
  // 10
  {
    id: 10,
    area: "",
    link: "",
  },
];
const SalmonArm = [
  //1
  {
    id: 1,
    area: "South West",
    link: "/search/#status=active&sold_days=180&ls_conversion=acres&location_search_field=Salmon%20Arm%2C%20BC&drive_time=09%3A00&drive_duration=15&drive_avoid_ferry=1&drive_departure=1&ss_locale=en-CA&ss_description=Salmon%20Arm%2C%20BC%2C%20Canada&ss_email_freq=40&ss_send_zero_result=1&bounds_north=50.88846755779719&bounds_east=-119.06584917824544&bounds_south=50.515770751289644&bounds_west=-119.50118243019857&center_lat=50.7001034&center_lon=-119.2838443&center_lat_pan=50.70248942705626&center_lon_pan=-119.283515804222&geotype=PopulatedPlace&user_lat=50.7001034&user_lon=-119.2838443&pgsize=20&startidx=0&zoom=11&sort_by=11&company_uuid=3341197&commute=0&buffer_miles=0.25&geospatial=true&agent_uuid=389f433d-052c-4cf1-a9c7-d81a7bbdb93b&ptype=1%2C9%2C4%2C3%2C5%2C7%2C2%2C8&searchType=criteria&pstatus=1%2C2%2C11&omit_hidden=true&currency=CAD",
  },
  //2
  {
    id: 2,
    area: "North West ",
    link: "",
  },
  //3
  {
    id: 3,
    area: "Broadview",
    link: "/search/#status=active&sold_days=180&ls_conversion=acres&location_search_field=Broadview%2C%20BC&drive_time=09%3A00&drive_duration=15&drive_avoid_ferry=1&drive_departure=1&ss_locale=en-CA&ss_description=Broadview%2C%20BC%20V1E%2C%20Canada&ss_email_freq=40&ss_send_zero_result=1&bounds_north=50.88846755779719&bounds_east=-119.06584917824544&bounds_south=50.515770751289644&bounds_west=-119.50118243019857&center_lat=50.703353&center_lon=-119.245168&center_lat_pan=50.70248942705626&center_lon_pan=-119.283515804222&geotype=PopulatedPlace&user_lat=50.703353&user_lon=-119.245168&pgsize=20&startidx=0&zoom=11&sort_by=11&company_uuid=3341197&commute=0&buffer_miles=0.25&geospatial=true&agent_uuid=389f433d-052c-4cf1-a9c7-d81a7bbdb93b&ptype=1%2C9%2C4%2C3%2C5%2C7%2C2%2C8&searchType=criteria&pstatus=1%2C2%2C11&omit_hidden=true&currency=CAD",
  },
  //4
  {
    id: 4,
    area: "",
    link: "",
  },
  //5
  {
    id: 5,
    area: "",
    link: "",
  },
  //6
  {
    id: 6,
    area: "",
    link: "",
  },
  //7
  {
    id: 7,
    area: "",
    link: "",
  },
  //8
  {
    id: 8,
    area: "",
    link: "",
  },
  //9
  {
    id: 9,
    area: "",
    link: "",
  },
  // 10
  {
    id: 10,
    area: "",
    link: "",
  },
];

const Template = [
  //1
  {
    id: 1,
    area: "",
    link: "",
  },
  //2
  {
    id: 2,
    area: "",
    link: "",
  },
  //3
  {
    id: 3,
    area: "",
    link: "",
  },
  //4
  {
    id: 4,
    area: "",
    link: "",
  },
  //5
  {
    id: 5,
    area: "",
    link: "",
  },
  //6
  {
    id: 6,
    area: "",
    link: "",
  },
  //7
  {
    id: 7,
    area: "",
    link: "",
  },
  //8
  {
    id: 8,
    area: "",
    link: "",
  },
  //9
  {
    id: 9,
    area: "",
    link: "",
  },
  // 10
  {
    id: 10,
    area: "",
    link: "",
  },
];
const Template2 = [
  //1
  {
    id: 1,
    area: "",
    link: "",
  },
  //2
  {
    id: 2,
    area: "",
    link: "",
  },
  //3
  {
    id: 3,
    area: "",
    link: "",
  },
  //4
  {
    id: 4,
    area: "",
    link: "",
  },
  //5
  {
    id: 5,
    area: "",
    link: "",
  },
  //6
  {
    id: 6,
    area: "",
    link: "",
  },
  //7
  {
    id: 7,
    area: "",
    link: "",
  },
  //8
  {
    id: 8,
    area: "",
    link: "",
  },
  //9
  {
    id: 9,
    area: "",
    link: "",
  },
  // 10
  {
    id: 10,
    area: "",
    link: "",
  },
];

const Neighborhoods = [Revelstoke, Sicamous, Vernon, SalmonArm];

module.exports = { Neighborhoods, linkOpener };
