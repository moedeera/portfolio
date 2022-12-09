import React from "react";
import "./LinksPage.css";

import { useState } from "react";
import { LinksPageButton } from "./LinksPageButton";
export const LinksPage = () => {
  const [links, setLinks] = useState();
  const [links2, setLinks2] = useState();
  const [links3, setLinks3] = useState();
  const [links4, setLinks4] = useState();
  const [links5, setLinks5] = useState();

  const copyTextToClipboard = async (text) => {
    if ("clipboard" in navigator) {
      return await navigator.clipboard.writeText(text);
    } else {
      console.log("not successful");
    }
  };
  const linkOpener = "https://executivesrealty.c21.ca";

  const Revelstoke = [
    // 1
    {
      id: 1,
      area: "Columbia Parks",
      link: "/search/#status=active&sold_days=180&pstatus=1%2C11&ls_conversion=acres&company_only=1&location_search_field=Columbia%20Park%20Drive%2C%20Revelstoke%2C%20BC&drive_time=09%3A00&drive_duration=15&drive_avoid_ferry=1&drive_departure=1&ss_locale=en-CA&ss_description=Columbia%20Park%20Dr%2C%20Revelstoke%2C%20BC%20V0E%202S0%2C%20Canada&ss_email_freq=40&ss_send_zero_result=1&bounds_north=51.05807129436762&bounds_east=-118.17123304350586&bounds_south=50.96551315332691&bounds_west=-118.28006635649415&center_lat=50.2670137&center_lon=-119.2720107&center_lat_pan=51.01181531419179&center_lon_pan=-118.2256497&user_lat=51.0117146&user_lon=-118.2249568&pgsize=20&startidx=0&zoom=13&sort_by=11&company_uuid=3341197&commute=0&buffer_miles=0.25&geospatial=false&agent_uuid=389f433d-052c-4cf1-a9c7-d81a7bbdb93b&ptype=1%2C2%2C8%2C9%2C4%2C3%2C5%2C7&searchType=criteria&omit_hidden=true&ex_pend=true&currency=CAD",
    },
    // 2
    {
      id: 2,
      area: "Farwell",
      link: "/search/#status=active&sold_days=180&pstatus=1%2C11&ls_conversion=acres&location_search_field=Big%20Eddy%2C%20Revelstoke%2C%20BC&drive_time=09%3A00&drive_duration=15&drive_avoid_ferry=1&drive_departure=1&ss_locale=en-CA&ss_description=Big%20Eddy%2C%20Revelstoke%2C%20BC%20V0E%202S0%2C%20Canada&ss_email_freq=40&ss_send_zero_result=1&bounds_north=51.02528090614741&bounds_east=-118.17328744451862&bounds_south=50.97899218583927&bounds_west=-118.22770410101276&center_lat=50.997749&center_lon=-118.224907&center_lat_pan=51.00214231899511&center_lon_pan=-118.20049577276569&geotype=CUSTOM&user_lat=50.997749&user_lon=-118.224907&pgsize=20&startidx=0&zoom=14&sort_by=11&company_uuid=3341197&commute=0&geolayer=%7B%22custom%22%3Atrue%2C%22geojson%22%3A%7B%22type%22%3A%22MultiPolygon%22%2C%22coordinates%22%3A%5B%5B%5B%5B-118.22651923518043%2C51.01529250061294%5D%2C%5B-118.22531760554176%2C51.0163724319815%5D%2C%5B-118.224459298657%2C51.01702037873043%5D%2C%5B-118.22325766901832%2C51.01777630516085%5D%2C%5B-118.22274268488746%2C51.018100269858515%5D%2C%5B-118.21776450495582%2C51.0201519937137%5D%2C%5B-118.21690619807106%2C51.02047594181247%5D%2C%5B-118.21621955256325%2C51.020583924009046%5D%2C%5B-118.21227134089332%2C51.020583924009046%5D%2C%5B-118.21055472712379%2C51.02047594181247%5D%2C%5B-118.20918143610817%2C51.020259976664775%5D%2C%5B-118.20780814509254%2C51.02004401051111%5D%2C%5B-118.20609153132301%2C51.01972005939438%5D%2C%5B-118.20557654719215%2C51.01961207518582%5D%2C%5B-118.20471824030739%2C51.01928812105111%5D%2C%5B-118.20420325617653%2C51.0190721503705%5D%2C%5B-118.20368827204567%2C51.01885617868388%5D%2C%5B-118.20317328791481%2C51.01864020599127%5D%2C%5B-118.19768012385231%2C51.016264439976396%5D%2C%5B-118.19630683283668%2C51.01550848889869%5D%2C%5B-118.19579184870582%2C51.01518450609281%5D%2C%5B-118.19527686457496%2C51.014860521023365%5D%2C%5B-118.19459021906715%2C51.01442853740971%5D%2C%5B-118.19407523493629%2C51.01410454705864%5D%2C%5B-118.19356025080543%2C51.013780554443976%5D%2C%5B-118.19081366877418%2C51.01140453943812%5D%2C%5B-118.18978370051246%2C51.010432498213426%5D%2C%5B-118.18944037775856%2C51.01000047335196%5D%2C%5B-118.1889253936277%2C51.00913641155627%5D%2C%5B-118.18841040949684%2C51.008056311675155%5D%2C%5B-118.18841040949684%2C51.00513991636171%5D%2C%5B-118.19012702326637%2C51.0034115955777%5D%2C%5B-118.19081366877418%2C51.002871482127546%5D%2C%5B-118.19115699152809%2C51.00265543498678%5D%2C%5B-118.19235862116676%2C51.002115312733075%5D%2C%5B-118.19321692805153%2C51.0017912363625%5D%2C%5B-118.20300162653785%2C51.00157518419114%5D%2C%5B-118.20952475886207%2C51.00157518419114%5D%2C%5B-118.21003974299293%2C51.0016832104026%5D%2C%5B-118.21038306574684%2C51.0017912363625%5D%2C%5B-118.21604789118629%2C51.00373566062947%5D%2C%5B-118.21724952082496%2C51.00427576401854%5D%2C%5B-118.22051108698707%2C51.00578802005504%5D%2C%5B-118.22171271662575%2C51.006652144227544%5D%2C%5B-118.22308600764137%2C51.00794830030368%5D%2C%5B-118.22428763728004%2C51.009244420161046%5D%2C%5B-118.22583258967262%2C51.01108052796017%5D%2C%5B-118.22617591242653%2C51.01172854865244%5D%2C%5B-118.22634757380348%2C51.012808563018574%5D%2C%5B-118.22651923518043%2C51.01529250061294%5D%2C%5B-118.22651923518043%2C51.01529250061294%5D%5D%5D%5D%7D%2C%22geolayerid%22%3A-1%2C%22templateids%22%3A%5B%5D%7D&buffer_miles=0.25&geospatial=true&agent_uuid=389f433d-052c-4cf1-a9c7-d81a7bbdb93b&ptype=1%2C2%2C8%2C9%2C4%2C3%2C5%2C7&searchType=criteria&omit_hidden=true&ex_pend=true&currency=CAD",
    },
    // 3
    {
      id: 3,
      area: "Mountain View",
      link: "/search/#status=active&sold_days=180&pstatus=1%2C11&ls_conversion=acres&company_only=1&location_search_field=Mountain%20View%20Drive%2C%20Revelstoke%2C%20BC&drive_time=09%3A00&drive_duration=15&drive_avoid_ferry=1&drive_departure=1&ss_locale=en-CA&ss_description=Mountain%20View%20Dr%2C%20Revelstoke%2C%20BC%20V0E%202S1%2C%20Canada&ss_email_freq=40&ss_send_zero_result=1&bounds_north=51.00355136750042&bounds_east=-118.15340027175291&bounds_south=50.95724095932139&bounds_west=-118.20781692824706&center_lat=50.2670137&center_lon=-119.2720107&center_lat_pan=50.980401937342556&center_lon_pan=-118.18060859999999&user_lat=50.9804454&user_lon=-118.1805467&pgsize=20&startidx=0&zoom=14&sort_by=11&company_uuid=3341197&commute=0&buffer_miles=0.25&geospatial=false&agent_uuid=389f433d-052c-4cf1-a9c7-d81a7bbdb93b&ptype=1%2C2%2C8%2C9%2C4%2C3%2C5%2C7&searchType=criteria&omit_hidden=true&ex_pend=true&currency=CAD",
    },
    // 4
    {
      id: 4,
      area: "South Side",
      link: "/search/#status=active&sold_days=180&pstatus=1%2C11&ls_conversion=acres&location_search_field=Revelstoke%2C%20BC&drive_time=09%3A00&drive_duration=15&drive_avoid_ferry=1&drive_departure=1&ss_locale=en-CA&ss_description=Revelstoke%2C%20BC%2C%20Canada&ss_email_freq=40&ss_send_zero_result=1&bounds_north=51.08684140147451&bounds_east=-118.08258395962422&bounds_south=50.90165534663799&bounds_west=-118.30025058560078&center_lat=50.998115&center_lon=-118.195672&center_lat_pan=50.994340747364184&center_lon_pan=-118.1914172726125&geotype=CUSTOM&user_lat=50.998115&user_lon=-118.195672&pgsize=20&startidx=0&zoom=12&sort_by=11&company_uuid=3341197&commute=0&geolayer=%7B%22custom%22%3Atrue%2C%22geojson%22%3A%7B%22type%22%3A%22MultiPolygon%22%2C%22coordinates%22%3A%5B%5B%5B%5B-118.18702113203709%2C50.955969566078814%5D%2C%5B-118.18702113203709%2C50.9576996537479%5D%2C%5B-118.18667780928318%2C50.96072715217576%5D%2C%5B-118.18599116377537%2C50.96310576255635%5D%2C%5B-118.18564784102146%2C50.9639706815932%5D%2C%5B-118.18530451826756%2C50.96461936030357%5D%2C%5B-118.18461787275974%2C50.96526802995638%5D%2C%5B-118.18324458174412%2C50.96634912591646%5D%2C%5B-118.16676508955662%2C50.97715870176827%5D%2C%5B-118.16607844404881%2C50.977591032473065%5D%2C%5B-118.16298853926365%2C50.97932031504017%5D%2C%5B-118.1602419572324%2C50.98083338445611%5D%2C%5B-118.15680872969334%2C50.9819141181362%5D%2C%5B-118.15577876143162%2C50.9821302618534%5D%2C%5B-118.15406214766209%2C50.9821302618534%5D%2C%5B-118.14650904707615%2C50.981481827682984%5D%2C%5B-118.14410578779881%2C50.98104953320469%5D%2C%5B-118.14032923750584%2C50.979536470832734%5D%2C%5B-118.13929926924412%2C50.9791041582413%5D%2C%5B-118.1379259782285%2C50.97823952098296%5D%2C%5B-118.12968623213474%2C50.97283517333084%5D%2C%5B-118.1269396501035%2C50.97002466398758%5D%2C%5B-118.121446486041%2C50.961592115494966%5D%2C%5B-118.11938654951756%2C50.95661835650315%5D%2C%5B-118.11835658125584%2C50.95337431379927%5D%2C%5B-118.11766993574803%2C50.9479670727151%5D%2C%5B-118.11766993574803%2C50.93477076430864%5D%2C%5B-118.11972987227146%2C50.92849579587439%5D%2C%5B-118.12110316328709%2C50.92460056206295%5D%2C%5B-118.12213313154881%2C50.92265282284427%5D%2C%5B-118.12316309981053%2C50.92092143063806%5D%2C%5B-118.12384974531834%2C50.92027214194983%5D%2C%5B-118.12487971358006%2C50.91983927779073%5D%2C%5B-118.12590968184178%2C50.91962284420106%5D%2C%5B-118.1327761369199%2C50.91962284420106%5D%2C%5B-118.13655268721287%2C50.91983927779073%5D%2C%5B-118.13998591475193%2C50.92027214194983%5D%2C%5B-118.14238917402928%2C50.92070500208204%5D%2C%5B-118.14410578779881%2C50.92113785818734%5D%2C%5B-118.14547907881443%2C50.92157071026576%5D%2C%5B-118.15062892012303%2C50.924384150621016%5D%2C%5B-118.15234553389256%2C50.92546619776379%5D%2C%5B-118.15852534346287%2C50.92979413466437%5D%2C%5B-118.16848170332615%2C50.93693435023429%5D%2C%5B-118.17054163984959%2C50.938448800489134%5D%2C%5B-118.1822146134824%2C50.949697458304435%5D%2C%5B-118.18427455000584%2C50.95186034970521%5D%2C%5B-118.18633448652928%2C50.95423941399604%5D%2C%5B-118.18702113203709%2C50.955969566078814%5D%2C%5B-118.18702113203709%2C50.955969566078814%5D%5D%5D%5D%7D%2C%22geolayerid%22%3A-1%2C%22templateids%22%3A%5B%5D%7D&buffer_miles=0.25&geospatial=true&agent_uuid=389f433d-052c-4cf1-a9c7-d81a7bbdb93b&ptype=1%2C2%2C8%2C9%2C4%2C3%2C5%2C7&searchType=criteria&omit_hidden=true&ex_pend=true&currency=CAD",
    },
    // 5
    {
      id: 5,
      area: "Arrow heights",
      link: "/search/#status=active&sold_days=180&pstatus=1%2C11&ls_conversion=acres&location_search_field=Revelstoke%2C%20BC&drive_time=09%3A00&drive_duration=15&drive_avoid_ferry=1&drive_departure=1&ss_locale=en-CA&ss_description=Revelstoke%2C%20BC%2C%20Canada&ss_email_freq=40&ss_send_zero_result=1&bounds_north=50.99720380334286&bounds_east=-118.09792887739842&bounds_south=50.904524117214194&bounds_west=-118.2067621903867&center_lat=50.998115&center_lon=-118.195672&center_lat_pan=50.95088706103032&center_lon_pan=-118.15234553389256&geotype=CUSTOM&user_lat=50.998115&user_lon=-118.195672&pgsize=20&startidx=0&zoom=13&sort_by=11&company_uuid=3341197&commute=0&geolayer=%7B%22custom%22%3Atrue%2C%22geojson%22%3A%7B%22type%22%3A%22MultiPolygon%22%2C%22coordinates%22%3A%5B%5B%5B%5B-118.19323446922009%2C50.98034704609261%5D%2C%5B-118.19323446922009%2C50.98175200968796%5D%2C%5B-118.19254782371227%2C50.98229236898095%5D%2C%5B-118.19237616233532%2C50.98240044008486%5D%2C%5B-118.19168951682751%2C50.982832721984785%5D%2C%5B-118.19065954856579%2C50.983373068699436%5D%2C%5B-118.1832781093568%2C50.98704725957284%5D%2C%5B-118.18190481834118%2C50.98769561601032%5D%2C%5B-118.18104651145642%2C50.98780367453613%5D%2C%5B-118.17984488181774%2C50.98780367453613%5D%2C%5B-118.17606833152477%2C50.98769561601032%5D%2C%5B-118.17177679710095%2C50.98726337939155%5D%2C%5B-118.16988852195446%2C50.98704725957284%5D%2C%5B-118.16594031028454%2C50.986506955623746%5D%2C%5B-118.13950445823376%2C50.98250851093718%5D%2C%5B-118.13778784446423%2C50.98207622601846%5D%2C%5B-118.13710119895642%2C50.98175200968796%5D%2C%5B-118.1360712306947%2C50.98121164410574%5D%2C%5B-118.13555624656384%2C50.980887421737584%5D%2C%5B-118.13452627830212%2C50.980130894073596%5D%2C%5B-118.13418295554821%2C50.979806664158346%5D%2C%5B-118.13109305076306%2C50.97656424047674%5D%2C%5B-118.12989142112438%2C50.975267207606805%5D%2C%5B-118.12954809837048%2C50.974078228984496%5D%2C%5B-118.12954809837048%2C50.9734296823598%5D%2C%5B-118.12989142112438%2C50.97256493943819%5D%2C%5B-118.13006308250134%2C50.97224065669143%5D%2C%5B-118.1305780666322%2C50.97137589163029%5D%2C%5B-118.1309213893861%2C50.9708354052905%5D%2C%5B-118.13229468040173%2C50.96943011137114%5D%2C%5B-118.1338396327943%2C50.96813287924537%5D%2C%5B-118.13452627830212%2C50.9678085655531%5D%2C%5B-118.13555624656384%2C50.967376143774395%5D%2C%5B-118.13727286033337%2C50.966835610890165%5D%2C%5B-118.1444826381654%2C50.96532208535193%5D%2C%5B-118.15409567527477%2C50.96532208535193%5D%2C%5B-118.15718558005993%2C50.96543019595434%5D%2C%5B-118.1583872096986%2C50.96553830630513%5D%2C%5B-118.17366507224743%2C50.967376143774395%5D%2C%5B-118.17555334739392%2C50.9678085655531%5D%2C%5B-118.17658331565563%2C50.96813287924537%5D%2C%5B-118.17726996116345%2C50.968457190673305%5D%2C%5B-118.18224814109509%2C50.9708354052905%5D%2C%5B-118.18310644797985%2C50.97137589163029%5D%2C%5B-118.18447973899548%2C50.97234875119194%5D%2C%5B-118.18774130515759%2C50.974726766552195%5D%2C%5B-118.18894293479626%2C50.975699555922056%5D%2C%5B-118.18962958030407%2C50.976348070847536%5D%2C%5B-118.19306280784313%2C50.980130894073596%5D%2C%5B-118.19323446922009%2C50.98034704609261%5D%2C%5B-118.19323446922009%2C50.98034704609261%5D%5D%5D%5D%7D%2C%22geolayerid%22%3A-1%2C%22templateids%22%3A%5B%5D%7D&buffer_miles=0.25&geospatial=true&agent_uuid=389f433d-052c-4cf1-a9c7-d81a7bbdb93b&ptype=1%2C2%2C8%2C9%2C4%2C3%2C5%2C7&searchType=criteria&omit_hidden=true&ex_pend=true&currency=CAD",
    },
    // 6
    {
      id: 6,
      area: "Airport way",
      link: "/search/#status=active&sold_days=180&ls_conversion=acres&location_search_field=Airport%20Way%2C%20Revelstoke%2C%20BC&drive_time=09%3A00&drive_duration=15&drive_avoid_ferry=1&drive_departure=1&ss_locale=en-CA&ss_description=Airport%20Way%2C%20Revelstoke%2C%20BC%20V0E%2C%20Canada&ss_email_freq=40&ss_send_zero_result=1&bounds_north=51.154759822490334&bounds_east=-117.96237367402345&bounds_south=50.784191996854766&bounds_west=-118.39770692597658&center_lat=50.83994537631408&center_lon=-118.98927237090432&center_lat_pan=50.96984546901712&center_lon_pan=-118.18004030000002&user_lat=50.9707527&user_lon=-118.18152&pgsize=20&startidx=0&zoom=11&sort_by=11&company_uuid=3341197&commute=0&buffer_miles=0.25&geospatial=false&agent_uuid=389f433d-052c-4cf1-a9c7-d81a7bbdb93b&ptype=1%2C9%2C4%2C3%2C5%2C7%2C2%2C8&searchType=criteria&pstatus=1%2C2%2C11&omit_hidden=true&currency=CAD",
    },
    // 7
    {
      id: 7,
      area: "Highway 23",
      link: "/search/#status=active&sold_days=180&pstatus=1%2C11&ls_conversion=acres&location_search_field=Revelstoke%2C%20BC&drive_time=09%3A00&drive_duration=15&drive_avoid_ferry=1&drive_departure=1&ss_locale=en-CA&ss_description=Revelstoke%2C%20BC%2C%20Canada&ss_email_freq=40&ss_send_zero_result=1&bounds_north=51.03926494750281&bounds_east=-118.13735869102184&bounds_south=50.94666924124917&bounds_west=-118.24619200401013&center_lat=50.998115&center_lon=-118.195672&center_lat_pan=50.99299018794722&center_lon_pan=-118.19177534751599&geotype=CUSTOM&user_lat=50.998115&user_lon=-118.195672&pgsize=20&startidx=0&zoom=13&sort_by=11&company_uuid=3341197&commute=0&geolayer=%7B%22custom%22%3Atrue%2C%22geojson%22%3A%7B%22type%22%3A%22MultiPolygon%22%2C%22coordinates%22%3A%5B%5B%5B%5B-118.22305124573414%2C51.015836359976156%5D%2C%5B-118.22305124573414%2C51.01594435297819%5D%2C%5B-118.22081964783375%2C51.01670029695039%5D%2C%5B-118.21137827210133%2C51.0189680549253%5D%2C%5B-118.20863169007008%2C51.0189680549253%5D%2C%5B-118.20691507630055%2C51.01875208275382%5D%2C%5B-118.20365351013844%2C51.018320135392855%5D%2C%5B-118.20176523499195%2C51.017996172231385%5D%2C%5B-118.19970529846852%2C51.0175642178284%5D%2C%5B-118.19798868469898%2C51.0171322594014%5D%2C%5B-118.19678705506031%2C51.01680828794038%5D%2C%5B-118.1957570867986%2C51.01637632247131%5D%2C%5B-118.19507044129078%2C51.01605234572873%5D%2C%5B-118.19438379578297%2C51.01572836672262%5D%2C%5B-118.19335382752125%2C51.015188396682305%5D%2C%5B-118.19215219788258%2C51.01410843773874%5D%2C%5B-118.19146555237477%2C51.01346045030023%5D%2C%5B-118.19009226135914%2C51.0120564464554%5D%2C%5B-118.18940561585133%2C51.01108441889395%5D%2C%5B-118.1880323248357%2C51.008600255901904%5D%2C%5B-118.18751734070484%2C51.00730411804393%5D%2C%5B-118.18734567932789%2C51.00622397549503%5D%2C%5B-118.18734567932789%2C51.00546786074521%5D%2C%5B-118.18751734070484%2C51.0043876754374%5D%2C%5B-118.18957727722828%2C51.00190315377493%5D%2C%5B-118.19009226135914%2C51.00136302276297%5D%2C%5B-118.19060724549%2C51.00093091342586%5D%2C%5B-118.19232385925953%2C50.99974259199731%5D%2C%5B-118.19301050476734%2C50.999526530285834%5D%2C%5B-118.19404047302906%2C50.999310467568186%5D%2C%5B-118.1964437323064%2C50.999310467568186%5D%2C%5B-118.19850366882984%2C50.999526530285834%5D%2C%5B-118.20039194397633%2C50.99985062247577%5D%2C%5B-118.20245188049977%2C51.0002827418742%5D%2C%5B-118.20434015564625%2C51.00071485724809%5D%2C%5B-118.20622843079273%2C51.001254995806%5D%2C%5B-118.21120661072437%2C51.0031994425475%5D%2C%5B-118.21275156311695%2C51.00406361494029%5D%2C%5B-118.21429651550953%2C51.005143807793885%5D%2C%5B-118.2154981451482%2C51.006115959856764%5D%2C%5B-118.21652811340992%2C51.00730411804393%5D%2C%5B-118.22305124573414%2C51.015836359976156%5D%2C%5B-118.22305124573414%2C51.015836359976156%5D%5D%5D%5D%7D%2C%22geolayerid%22%3A-1%2C%22templateids%22%3A%5B%5D%7D&buffer_miles=0.25&geospatial=true&agent_uuid=389f433d-052c-4cf1-a9c7-d81a7bbdb93b&ptype=1%2C2%2C8%2C9%2C4%2C3%2C5%2C7&searchType=criteria&omit_hidden=true&ex_pend=true&currency=CAD",
    },
    // 8
    {
      id: 8,
      area: "Downtown",
      link: "/search/#status=active&sold_days=180&pstatus=1%2C11&ls_conversion=acres&location_search_field=Revelstoke%2C%20BC&drive_time=09%3A00&drive_duration=15&drive_avoid_ferry=1&drive_departure=1&ss_locale=en-CA&ss_description=Revelstoke%2C%20BC%2C%20Canada&ss_email_freq=40&ss_send_zero_result=1&bounds_north=51.0599035978047&bounds_east=-118.12735002808277&bounds_south=50.967349117279575&bounds_west=-118.23618334107105&center_lat=50.998115&center_lon=-118.195672&center_lat_pan=51.01364944757176&center_lon_pan=-118.18176668457691&geotype=CUSTOM&user_lat=50.998115&user_lon=-118.195672&pgsize=20&startidx=0&zoom=13&sort_by=11&company_uuid=3341197&commute=0&geolayer=%7B%22custom%22%3Atrue%2C%22geojson%22%3A%7B%22type%22%3A%22MultiPolygon%22%2C%22coordinates%22%3A%5B%5B%5B%5B-118.21235593728726%2C50.99728483065863%5D%2C%5B-118.21235593728726%2C50.998905347260745%5D%2C%5B-118.2118409531564%2C51.00030974920298%5D%2C%5B-118.20978101663296%2C51.00268633257271%5D%2C%5B-118.20789274148648%2C51.00430666052534%5D%2C%5B-118.2066911118478%2C51.005278830132035%5D%2C%5B-118.20531782083218%2C51.00625097936529%5D%2C%5B-118.20394452981655%2C51.00646700976149%5D%2C%5B-118.19518979959194%2C51.00754714665115%5D%2C%5B-118.19398816995327%2C51.00765515895674%5D%2C%5B-118.19055494241421%2C51.00765515895674%5D%2C%5B-118.18746503762905%2C51.00743913409403%5D%2C%5B-118.18592008523648%2C51.00711509491355%5D%2C%5B-118.18540510110562%2C51.00700708135033%5D%2C%5B-118.18506177835171%2C51.0068990675356%5D%2C%5B-118.1847184555978%2C51.00679105346937%5D%2C%5B-118.18420347146694%2C51.006575024582304%5D%2C%5B-118.17802366189663%2C51.0039825994623%5D%2C%5B-118.17699369363491%2C51.00333447054501%5D%2C%5B-118.17613538675015%2C51.0024702845697%5D%2C%5B-118.17476209573452%2C51.000849892477106%5D%2C%5B-118.17356046609585%2C50.99901337968859%5D%2C%5B-118.17304548196499%2C50.99804107878267%5D%2C%5B-118.17218717508023%2C50.99642053199594%5D%2C%5B-118.17167219094937%2C50.99544817675751%5D%2C%5B-118.17098554544155%2C50.99404362766472%5D%2C%5B-118.17098554544155%2C50.99253098879197%5D%2C%5B-118.1711572068185%2C50.991990748674624%5D%2C%5B-118.17167219094937%2C50.991126351406315%5D%2C%5B-118.17321714334194%2C50.98896528780111%5D%2C%5B-118.17510541848843%2C50.986804123573975%5D%2C%5B-118.1759637253732%2C50.98604769232228%5D%2C%5B-118.17750867776577%2C50.985075119743485%5D%2C%5B-118.17853864602749%2C50.984534792839455%5D%2C%5B-118.1821435349435%2C50.982805704483965%5D%2C%5B-118.18265851907437%2C50.98258956391135%5D%2C%5B-118.18798002175991%2C50.981616918882004%5D%2C%5B-118.18918165139858%2C50.98140077277492%5D%2C%5B-118.19175657205288%2C50.98140077277492%5D%2C%5B-118.1924432175607%2C50.98150884595423%5D%2C%5B-118.19639142923062%2C50.98226535116566%5D%2C%5B-118.19776472024624%2C50.98269763432343%5D%2C%5B-118.19913801126187%2C50.98334605151309%5D%2C%5B-118.20068296365444%2C50.98421059367831%5D%2C%5B-118.20325788430874%2C50.985723503726724%5D%2C%5B-118.20463117532437%2C50.9866960627213%5D%2C%5B-118.20772108010952%2C50.9896136174479%5D%2C%5B-118.20823606424038%2C50.990261938038756%5D%2C%5B-118.209609355256%2C50.99209879720121%5D%2C%5B-118.21029600076382%2C50.99307122262062%5D%2C%5B-118.21081098489468%2C50.99393558366603%5D%2C%5B-118.21132596902554%2C50.994907970598845%5D%2C%5B-118.21235593728726%2C50.99728483065863%5D%2C%5B-118.21235593728726%2C50.99728483065863%5D%5D%5D%5D%7D%2C%22geolayerid%22%3A-1%2C%22templateids%22%3A%5B%5D%7D&buffer_miles=0.25&geospatial=true&agent_uuid=389f433d-052c-4cf1-a9c7-d81a7bbdb93b&ptype=1%2C2%2C8%2C9%2C4%2C3%2C5%2C7&searchType=criteria&omit_hidden=true&ex_pend=true&currency=CAD",
    },
    // 9
    {
      area: "Big Eddy",
      link: "/search/#status=active&sold_days=180&ls_conversion=acres&location_search_field=Big%20Eddy%2C%20Revelstoke%2C%20BC&drive_time=09%3A00&drive_duration=15&drive_avoid_ferry=1&drive_departure=1&ss_locale=en-CA&ss_description=Big%20Eddy%2C%20Revelstoke%2C%20BC%20V0E%202S0%2C%20Canada&ss_email_freq=40&ss_send_zero_result=1&bounds_north=51.08684140147451&bounds_east=-118.08258395962422&bounds_south=50.90165534663799&bounds_west=-118.30025058560078&center_lat=50.997749&center_lon=-118.224907&center_lat_pan=50.994340747364184&center_lon_pan=-118.1914172726125&geotype=Neighborhood&user_lat=50.997749&user_lon=-118.224907&pgsize=20&startidx=0&zoom=12&sort_by=11&company_uuid=3341197&commute=0&buffer_miles=0.25&geospatial=true&agent_uuid=389f433d-052c-4cf1-a9c7-d81a7bbdb93b&ptype=1%2C9%2C4%2C3%2C5%2C7%2C2%2C8&searchType=criteria&pstatus=1%2C2%2C11&omit_hidden=true&currency=CAD",
    },
    // 10
    {
      area: "Resort",
      link: "/search/#status=active&sold_days=180&pstatus=1%2C11&ls_conversion=acres&location_search_field=Revelstoke%2C%20BC&drive_time=09%3A00&drive_duration=15&drive_avoid_ferry=1&drive_departure=1&ss_locale=en-CA&ss_description=Revelstoke%2C%20BC%2C%20Canada&ss_email_freq=40&ss_send_zero_result=1&bounds_north=51.032275398856&bounds_east=-118.17799013428395&bounds_south=50.98599366104693&bounds_west=-118.23240679077809&center_lat=50.998115&center_lon=-118.195672&center_lat_pan=51.00914030265318&center_lon_pan=-118.20519846253102&geotype=CUSTOM&user_lat=50.998115&user_lon=-118.195672&pgsize=20&startidx=0&zoom=14&sort_by=11&company_uuid=3341197&commute=0&geolayer=%7B%22custom%22%3Atrue%2C%22geojson%22%3A%7B%22type%22%3A%22MultiPolygon%22%2C%22coordinates%22%3A%5B%5B%5B%5B-118.2142274486274%2C51.01127342584867%5D%2C%5B-118.2142274486274%2C51.01192144384569%5D%2C%5B-118.20813346974556%2C51.01370344665073%5D%2C%5B-118.20701767079537%2C51.014027439804075%5D%2C%5B-118.20667434804146%2C51.014027439804075%5D%2C%5B-118.20641685597603%2C51.013973441102365%5D%2C%5B-118.2061593639106%2C51.013919442337816%5D%2C%5B-118.20040870778267%2C51.01240745140147%5D%2C%5B-118.19937873952095%2C51.01192144384569%5D%2C%5B-118.19834877125923%2C51.011435431196794%5D%2C%5B-118.19740463368599%2C51.01094941345475%5D%2C%5B-118.19620300404732%2C51.010301381876%5D%2C%5B-118.19594551198189%2C51.01013937256656%5D%2C%5B-118.19568801991646%2C51.00997736269119%5D%2C%5B-118.19139648549263%2C51.00727711478676%5D%2C%5B-118.19070983998482%2C51.00684506053392%5D%2C%5B-118.19019485585396%2C51.00646700976149%5D%2C%5B-118.18590332143013%2C51.00268633257271%5D%2C%5B-118.18350006215279%2C51.0004717928455%5D%2C%5B-118.1823842632026%2C50.999391491205216%5D%2C%5B-118.18212677113716%2C50.9991214118649%5D%2C%5B-118.18186927907173%2C50.998851330952505%5D%2C%5B-118.1786935435981%2C50.995502197027506%5D%2C%5B-118.17740608327095%2C50.99404362766472%5D%2C%5B-118.17629028432076%2C50.99236891741708%5D%2C%5B-118.17629028432076%2C50.99215282137015%5D%2C%5B-118.17714859120552%2C50.99182867541312%5D%2C%5B-118.17732025258248%2C50.99177465086685%5D%2C%5B-118.17895103566353%2C50.991612576850684%5D%2C%5B-118.18006683461373%2C50.991612576850684%5D%2C%5B-118.18032432667916%2C50.99166660158564%5D%2C%5B-118.18513084523384%2C50.993341337176695%5D%2C%5B-118.18616081349556%2C50.99371949491396%5D%2C%5B-118.2050435649604%2C51.00101193423312%5D%2C%5B-118.20564437977974%2C51.00128200256883%5D%2C%5B-118.20598770253365%2C51.001444042815656%5D%2C%5B-118.20641685597603%2C51.00171410863604%5D%2C%5B-118.2116525279731%2C51.00625097936529%5D%2C%5B-118.211995850727%2C51.006737046341904%5D%2C%5B-118.21379829518501%2C51.010031366045844%5D%2C%5B-118.21414161793892%2C51.0107874064089%5D%2C%5B-118.2142274486274%2C51.01127342584867%5D%2C%5B-118.2142274486274%2C51.01127342584867%5D%5D%5D%5D%7D%2C%22geolayerid%22%3A-1%2C%22templateids%22%3A%5B%5D%7D&buffer_miles=0.25&geospatial=true&agent_uuid=389f433d-052c-4cf1-a9c7-d81a7bbdb93b&ptype=1%2C2%2C8%2C9%2C4%2C3%2C5%2C7&searchType=criteria&omit_hidden=true&ex_pend=true&currency=CAD",
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
      link: "/search/#status=active&sold_days=180&pstatus=1%2C11&ls_conversion=acres&location_search_field=Salmon%20Arm%2C%20BC&drive_time=09%3A00&drive_duration=15&drive_avoid_ferry=1&drive_departure=1&ss_locale=en-CA&ss_description=Salmon%20Arm%2C%20BC%2C%20Canada&ss_email_freq=40&ss_send_zero_result=1&bounds_north=50.72642064259132&bounds_east=-119.2697527497167&bounds_south=50.67983422124133&bounds_west=-119.32416940621084&center_lat=50.7001034&center_lon=-119.2838443&center_lat_pan=50.7031332174157&center_lon_pan=-119.29696107796377&geotype=CUSTOM&user_lat=50.7001034&user_lon=-119.2838443&pgsize=20&startidx=0&zoom=14&sort_by=10&company_uuid=3341197&commute=0&geolayer=%7B%22custom%22%3Atrue%2C%22geojson%22%3A%7B%22type%22%3A%22MultiPolygon%22%2C%22coordinates%22%3A%5B%5B%5B%5B-119.29869445553965%2C50.69255902791282%5D%2C%5B-119.29869445553965%2C50.69380957050316%5D%2C%5B-119.2985227941627%2C50.69440764430455%5D%2C%5B-119.29817947140879%2C50.69506007975443%5D%2C%5B-119.29757865658945%2C50.6961474520038%5D%2C%5B-119.29714950314707%2C50.69679986325322%5D%2C%5B-119.29603370419687%2C50.697941561102795%5D%2C%5B-119.29551872006601%2C50.6981590242088%5D%2C%5B-119.2944887518043%2C50.69859394739583%5D%2C%5B-119.29405959836191%2C50.69875704255111%5D%2C%5B-119.29354461423105%2C50.69892013713921%5D%2C%5B-119.29157050839609%2C50.699028866549504%5D%2C%5B-119.27998336545176%2C50.6993006889724%5D%2C%5B-119.27972587338633%2C50.6993006889724%5D%2C%5B-119.27955421200937%2C50.699246324613846%5D%2C%5B-119.27903922787851%2C50.69908323116013%5D%2C%5B-119.27758010617441%2C50.698485216977176%5D%2C%5B-119.27646430722422%2C50.69783282917165%5D%2C%5B-119.27509101620859%2C50.69679986325322%5D%2C%5B-119.27457603207773%2C50.69631055566694%5D%2C%5B-119.27311691037363%2C50.69473386316388%5D%2C%5B-119.27191528073496%2C50.69337460294878%5D%2C%5B-119.27088531247324%2C50.69168906557801%5D%2C%5B-119.27071365109629%2C50.69136282554288%5D%2C%5B-119.27054198971933%2C50.69103658323892%5D%2C%5B-119.27037032834238%2C50.690710338666086%5D%2C%5B-119.27019866696543%2C50.690220967552676%5D%2C%5B-119.27019866696543%2C50.68929658596564%5D%2C%5B-119.27037032834238%2C50.688752823582576%5D%2C%5B-119.2710569738502%2C50.686849605609446%5D%2C%5B-119.27191528073496%2C50.686088296802396%5D%2C%5B-119.27217277280039%2C50.68587077773143%5D%2C%5B-119.27268775693125%2C50.6855444972342%5D%2C%5B-119.27440437070078%2C50.68451126069083%5D%2C%5B-119.27620681515879%2C50.68402182491311%5D%2C%5B-119.27629264584726%2C50.68402182491311%5D%2C%5B-119.28393157712168%2C50.68462002350369%5D%2C%5B-119.28453239194101%2C50.68467440481557%5D%2C%5B-119.28727897397226%2C50.6855444972342%5D%2C%5B-119.29620536557383%2C50.6890790817687%5D%2C%5B-119.29646285763926%2C50.68918783399324%5D%2C%5B-119.29723533383554%2C50.68973159133431%5D%2C%5B-119.2974069952125%2C50.68989471730764%5D%2C%5B-119.29783614865488%2C50.690329717130155%5D%2C%5B-119.29835113278574%2C50.69103658323892%5D%2C%5B-119.2985227941627%2C50.69141719903963%5D%2C%5B-119.29860862485117%2C50.691743438696605%5D%2C%5B-119.29869445553965%2C50.69255902791282%5D%2C%5B-119.29869445553965%2C50.69255902791282%5D%5D%5D%5D%7D%2C%22geolayerid%22%3A-1%2C%22templateids%22%3A%5B%5D%7D&buffer_miles=0.25&geospatial=true&agent_uuid=389f433d-052c-4cf1-a9c7-d81a7bbdb93b&ptype=1%2C2%2C8%2C9%2C4%2C3%2C5%2C7&searchType=criteria&omit_hidden=true&ex_pend=true&currency=CAD",
    },
    //2
    {
      id: 2,
      area: "North West ",
      link: "/search/#status=active&sold_days=180&pstatus=1%2C11&ls_conversion=acres&location_search_field=Salmon%20Arm%2C%20BC&drive_time=09%3A00&drive_duration=15&drive_avoid_ferry=1&drive_departure=1&ss_locale=en-CA&ss_description=Salmon%20Arm%2C%20BC%2C%20Canada&ss_email_freq=40&ss_send_zero_result=1&bounds_north=50.761207930857886&bounds_east=-119.23384199432081&bounds_south=50.66805798239032&bounds_west=-119.3426753073091&center_lat=50.7001034&center_lon=-119.2838443&center_lat_pan=50.71465609673849&center_lon_pan=-119.28825865081495&geotype=CUSTOM&user_lat=50.7001034&user_lon=-119.2838443&pgsize=20&startidx=0&zoom=13&sort_by=10&company_uuid=3341197&commute=0&geolayer=%7B%22custom%22%3Atrue%2C%22geojson%22%3A%7B%22type%22%3A%22MultiPolygon%22%2C%22coordinates%22%3A%5B%5B%5B%5B-119.31936288765615%2C50.7034050160487%5D%2C%5B-119.31936288765615%2C50.70383989058456%5D%2C%5B-119.31936288765615%2C50.70579677608564%5D%2C%5B-119.31901956490225%2C50.70623162843919%5D%2C%5B-119.31833291939444%2C50.70688389940747%5D%2C%5B-119.31730295113272%2C50.70775357991603%5D%2C%5B-119.31678796700186%2C50.70807970594764%5D%2C%5B-119.316272982871%2C50.70840582971067%5D%2C%5B-119.31575799874014%2C50.708731951205074%5D%2C%5B-119.31507135323233%2C50.709166776335444%5D%2C%5B-119.3133547394628%2C50.710036414497026%5D%2C%5B-119.31266809395498%2C50.71036252464859%5D%2C%5B-119.31180978707022%2C50.710579930155994%5D%2C%5B-119.31095148018545%2C50.71079733465514%5D%2C%5B-119.31009317330069%2C50.71101473814607%5D%2C%5B-119.30837655953115%2C50.71144954210315%5D%2C%5B-119.30648828438467%2C50.71177564242436%5D%2C%5B-119.30133844307608%2C50.71253653435176%5D%2C%5B-119.29962182930655%2C50.71275392977676%5D%2C%5B-119.29584527901358%2C50.71275392977676%5D%2C%5B-119.29481531075186%2C50.71264523219029%5D%2C%5B-119.29258371285147%2C50.712319137918506%5D%2C%5B-119.29224039009756%2C50.71221043932379%5D%2C%5B-119.28125406197256%2C50.706557765057646%5D%2C%5B-119.27850747994131%2C50.70503577476219%5D%2C%5B-119.27764917305655%2C50.70449219482618%5D%2C%5B-119.2749025910253%2C50.70253525487739%5D%2C%5B-119.27473092964834%2C50.70220909027891%5D%2C%5B-119.27455926827139%2C50.701774200618495%5D%2C%5B-119.27455926827139%2C50.70155675427586%5D%2C%5B-119.27473092964834%2C50.70112185856563%5D%2C%5B-119.2752459137792%2C50.70068695882211%5D%2C%5B-119.2781641571874%2C50.69851239960545%5D%2C%5B-119.28228403023428%2C50.69590279544557%5D%2C%5B-119.28382898262686%2C50.69525037171781%5D%2C%5B-119.28554559639639%2C50.69459793891489%5D%2C%5B-119.28794885567373%2C50.69405423797997%5D%2C%5B-119.29000879219717%2C50.693836755841374%5D%2C%5B-119.29824853829092%2C50.69351053074276%5D%2C%5B-119.30116678169912%2C50.69351053074276%5D%2C%5B-119.30185342720694%2C50.693619272694384%5D%2C%5B-119.3023684113378%2C50.693728014393905%5D%2C%5B-119.30460000923819%2C50.69438045929718%5D%2C%5B-119.30906320503897%2C50.69655521009815%5D%2C%5B-119.31404138497061%2C50.69970841965263%5D%2C%5B-119.31816125801748%2C50.70242653359663%5D%2C%5B-119.3188479035253%2C50.702970137479646%5D%2C%5B-119.31936288765615%2C50.7034050160487%5D%2C%5B-119.31936288765615%2C50.7034050160487%5D%5D%5D%5D%7D%2C%22geolayerid%22%3A-1%2C%22templateids%22%3A%5B%5D%7D&buffer_miles=0.25&geospatial=true&agent_uuid=389f433d-052c-4cf1-a9c7-d81a7bbdb93b&ptype=1%2C2%2C8%2C9%2C4%2C3%2C5%2C7&searchType=criteria&omit_hidden=true&ex_pend=true&currency=CAD",
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
      area: "North East",
      link: "/search/#status=active&sold_days=180&pstatus=1%2C11&ls_conversion=acres&location_search_field=Salmon%20Arm%2C%20BC&drive_time=09%3A00&drive_duration=15&drive_avoid_ferry=1&drive_departure=1&ss_locale=en-CA&ss_description=Salmon%20Arm%2C%20BC%2C%20Canada&ss_email_freq=40&ss_send_zero_result=1&bounds_north=50.71344687096527&bounds_east=-119.25674001268095&bounds_south=50.69015299893873&bounds_west=-119.28394834092802&center_lat=50.7001034&center_lon=-119.2838443&center_lat_pan=50.70180138134046&center_lon_pan=-119.27034417680449&geotype=CUSTOM&user_lat=50.7001034&user_lon=-119.2838443&pgsize=20&startidx=0&zoom=15&sort_by=10&company_uuid=3341197&commute=0&geolayer=%7B%22custom%22%3Atrue%2C%22geojson%22%3A%7B%22type%22%3A%22MultiPolygon%22%2C%22coordinates%22%3A%5B%5B%5B%5B-119.28206844768471%2C50.70700619920381%5D%2C%5B-119.28206844768471%2C50.707767168545985%5D%2C%5B-119.28198261699623%2C50.70825635660091%5D%2C%5B-119.28185387096352%2C50.7085824791351%5D%2C%5B-119.28073807201332%2C50.710865273354415%5D%2C%5B-119.2806093259806%2C50.711001150457456%5D%2C%5B-119.28048057994789%2C50.711137027166664%5D%2C%5B-119.28035183391518%2C50.71121855300313%5D%2C%5B-119.28022308788246%2C50.71130007869781%5D%2C%5B-119.28009434184975%2C50.711381604250725%5D%2C%5B-119.27987976512856%2C50.7114903047674%5D%2C%5B-119.27945061168617%2C50.71170770504456%5D%2C%5B-119.27786274394936%2C50.712305550607994%5D%2C%5B-119.27704735240883%2C50.71260447053041%5D%2C%5B-119.27636070690102%2C50.712821865640336%5D%2C%5B-119.27481575450844%2C50.713311000951386%5D%2C%5B-119.27472992381996%2C50.713338174985665%5D%2C%5B-119.27460117778725%2C50.7133653490042%5D%2C%5B-119.27369995555824%2C50.71344687096527%5D%2C%5B-119.27172584972328%2C50.71344687096527%5D%2C%5B-119.27099628887123%2C50.71339252300698%5D%2C%5B-119.27009506664223%2C50.713283826901325%5D%2C%5B-119.26730556926674%2C50.712876214260305%5D%2C%5B-119.26709099254555%2C50.712821865640336%5D%2C%5B-119.26696224651283%2C50.712767516957385%5D%2C%5B-119.26683350048012%2C50.712713168211415%5D%2C%5B-119.2661468549723%2C50.71238707441223%5D%2C%5B-119.26593227825111%2C50.71225120132639%5D%2C%5B-119.2658035322184%2C50.712142502574125%5D%2C%5B-119.25915165386147%2C50.70613650483152%5D%2C%5B-119.25876541576332%2C50.70575600847072%5D%2C%5B-119.25855083904213%2C50.70545704487819%5D%2C%5B-119.2577354475016%2C50.7041252748069%5D%2C%5B-119.2562763257975%2C50.70167906796769%5D%2C%5B-119.25614757976479%2C50.7014616211839%5D%2C%5B-119.25601883373207%2C50.701244173391814%5D%2C%5B-119.25498886547035%2C50.6992599157094%5D%2C%5B-119.25447388133949%2C50.698199798428924%5D%2C%5B-119.2542593046183%2C50.697737688525145%5D%2C%5B-119.25417347392982%2C50.69749304026212%5D%2C%5B-119.25408764324135%2C50.69722120736201%5D%2C%5B-119.25395889720863%2C50.69662316943591%5D%2C%5B-119.25395889720863%2C50.696296963716684%5D%2C%5B-119.25400181255287%2C50.69583483506404%5D%2C%5B-119.25413055858559%2C50.69564454547185%5D%2C%5B-119.25460262737221%2C50.69499211815185%5D%2C%5B-119.2548172040934%2C50.69472027075674%5D%2C%5B-119.25554676494545%2C50.694040645375864%5D%2C%5B-119.25601883373207%2C50.693632865420646%5D%2C%5B-119.25636215648598%2C50.693388195745904%5D%2C%5B-119.25674839458412%2C50.69319789622766%5D%2C%5B-119.25722046337074%2C50.69308915329918%5D%2C%5B-119.25769253215736%2C50.69300759593739%5D%2C%5B-119.25820751628822%2C50.69300759593739%5D%2C%5B-119.25880833110756%2C50.69303478174041%5D%2C%5B-119.26687641582436%2C50.693714421695276%5D%2C%5B-119.26752014598793%2C50.693795977828124%5D%2C%5B-119.27194042644447%2C50.69439405180287%5D%2C%5B-119.27271290264076%2C50.6945571615634%5D%2C%5B-119.27408619365639%2C50.69491056409873%5D%2C%5B-119.27481575450844%2C50.69510085666873%5D%2C%5B-119.2756740613932%2C50.695345517410026%5D%2C%5B-119.27597446880287%2C50.69545425510762%5D%2C%5B-119.27674694499916%2C50.69578046668788%5D%2C%5B-119.27717609844154%2C50.695970755728645%5D%2C%5B-119.27760525188393%2C50.696215411932386%5D%2C%5B-119.27816315135902%2C50.6965416182188%5D%2C%5B-119.27863522014565%2C50.69686782223647%5D%2C%5B-119.2791502042765%2C50.69724839072293%5D%2C%5B-119.28018017253822%2C50.69830852950926%5D%2C%5B-119.28048057994789%2C50.698661903779445%5D%2C%5B-119.28069515666908%2C50.698988093050176%5D%2C%5B-119.28086681804604%2C50.699341462199946%5D%2C%5B-119.2813818021769%2C50.7010539057466%5D%2C%5B-119.28142471752113%2C50.701380078380026%5D%2C%5B-119.28206844768471%2C50.70700619920381%5D%2C%5B-119.28206844768471%2C50.70700619920381%5D%5D%5D%5D%7D%2C%22geolayerid%22%3A-1%2C%22templateids%22%3A%5B%5D%7D&buffer_miles=0.25&geospatial=true&agent_uuid=389f433d-052c-4cf1-a9c7-d81a7bbdb93b&ptype=1%2C2%2C8%2C9%2C4%2C3%2C5%2C7&searchType=criteria&omit_hidden=true&ex_pend=true&currency=CAD",
    },
    //5
    {
      id: 5,
      area: "Canoe",
      link: "/search/#status=active&sold_days=180&pstatus=1%2C11&ls_conversion=acres&company_only=1&location_search_field=Canoe%2C%20BC&drive_time=09%3A00&drive_duration=15&drive_avoid_ferry=1&drive_departure=1&ss_locale=en-CA&ss_description=Canoe%2C%20BC%20V0E%201K0%2C%20Canada&ss_email_freq=40&ss_send_zero_result=1&bounds_north=50.88846755779719&bounds_east=-119.06584917824544&bounds_south=50.515770751289644&bounds_west=-119.50118243019857&center_lat=50.750796&center_lon=-119.227433&center_lat_pan=50.70248942705626&center_lon_pan=-119.283515804222&geotype=PopulatedPlace&user_lat=50.750796&user_lon=-119.227433&pgsize=20&startidx=0&zoom=11&sort_by=11&company_uuid=3341197&commute=0&buffer_miles=0.25&geospatial=true&agent_uuid=389f433d-052c-4cf1-a9c7-d81a7bbdb93b&ptype=1%2C2%2C8%2C9%2C4%2C3%2C5%2C7&searchType=criteria&omit_hidden=true&ex_pend=true&currency=CAD",
    },
    //6
    {
      id: 6,
      area: "Gleneden",
      link: "/search/#status=active&sold_days=180&pstatus=1%2C11&ls_conversion=acres&location_search_field=Gleneden%2C%20BC&drive_time=09%3A00&drive_duration=15&drive_avoid_ferry=1&drive_departure=1&ss_locale=en-CA&ss_description=Gleneden%2C%20BC%20V1E%203A7%2C%20Canada&ss_email_freq=40&ss_send_zero_result=1&bounds_north=50.88846755779719&bounds_east=-119.06584917824544&bounds_south=50.515770751289644&bounds_west=-119.50118243019857&center_lat=50.728962&center_lon=-119.342812&center_lat_pan=50.70248942705626&center_lon_pan=-119.283515804222&geotype=PopulatedPlace&user_lat=50.728962&user_lon=-119.342812&pgsize=20&startidx=0&zoom=11&sort_by=11&company_uuid=3341197&commute=0&buffer_miles=0.25&geospatial=true&agent_uuid=389f433d-052c-4cf1-a9c7-d81a7bbdb93b&ptype=1%2C2%2C8%2C9%2C4%2C3%2C5%2C7&searchType=criteria&omit_hidden=true&ex_pend=true&currency=CAD",
    },
    //7
    {
      id: 7,
      link: "/search/#status=active&sold_days=180&pstatus=1%2C11&ls_conversion=acres&location_search_field=Salmon%20Valley%2C%20BC&drive_time=09%3A00&drive_duration=15&drive_avoid_ferry=1&drive_departure=1&ss_locale=en-CA&ss_description=Salmon%20Valley%2C%20BC%20V2K%2C%20Canada&ss_email_freq=40&ss_send_zero_result=1&bounds_north=54.70294620858862&bounds_east=-122.19416282017026&bounds_south=53.31994643840023&bounds_west=-123.93549582798276&center_lat=54.09995499999999&center_lon=-122.658538&center_lat_pan=54.01719290234686&center_lon_pan=-123.06482932407651&geotype=PopulatedPlace&user_lat=54.09995499999999&user_lon=-122.658538&pgsize=20&startidx=0&zoom=9&sort_by=10&company_uuid=3341197&commute=0&buffer_miles=0.25&geospatial=true&agent_uuid=389f433d-052c-4cf1-a9c7-d81a7bbdb93b&ptype=1%2C2%2C8%2C9%2C4%2C3%2C5%2C7&searchType=criteria&omit_hidden=true&ex_pend=true&currency=CAD",
    },
    //8
    {
      id: 8,
      area: "North Shuswap",
      link: "/search/#status=active&sold_days=180&pstatus=1%2C11&ls_conversion=acres&company_only=1&location_search_field=Shuswap%2C%20BC&drive_time=09%3A00&drive_duration=15&drive_avoid_ferry=1&drive_departure=1&ss_locale=en-CA&ss_description=Shuswap%20Lake%2C%20Columbia-Shuswap%2C%20BC%2C%20Canada&ss_email_freq=40&ss_send_zero_result=1&bounds_north=51.22922821890991&bounds_east=-118.85326141903886&bounds_south=50.48632736701023&bounds_west=-119.72392792294511&center_lat=50.9465204&center_lon=-119.2586177&center_lat_pan=50.85925721237203&center_lon_pan=-119.28859467099198&geotype=Neighborhood&user_lat=50.9465204&user_lon=-119.2586177&pgsize=20&startidx=0&zoom=10&sort_by=11&company_uuid=3341197&commute=0&buffer_miles=0.25&geospatial=true&agent_uuid=389f433d-052c-4cf1-a9c7-d81a7bbdb93b&ptype=1%2C2%2C8%2C9%2C4%2C3%2C5%2C7&searchType=criteria&omit_hidden=true&ex_pend=true&currency=CAD",
      linkALL:
        "/search/#status=active&sold_days=180&pstatus=1%2C11&ls_conversion=acres&company_only=1&location_search_field=Shuswap%20Street%20North%2C%20Salmon%20Arm%2C%20BC&drive_time=09%3A00&drive_duration=15&drive_avoid_ferry=1&drive_departure=1&ss_locale=en-CA&ss_description=Shuswap%20St%20N%2C%20Salmon%20Arm%2C%20BC%20V1E%2C%20Canada&ss_email_freq=40&ss_send_zero_result=1&bounds_north=50.721191126157336&bounds_east=-119.25562842385254&bounds_south=50.67459950685205&bounds_west=-119.31004508034668&center_lat=50.750796&center_lon=-119.227433&center_lat_pan=50.697901102217145&center_lon_pan=-119.28283675209961&user_lat=50.7008175&user_lon=-119.2851284&pgsize=20&startidx=0&zoom=14&sort_by=11&company_uuid=3341197&commute=0&buffer_miles=0.25&geospatial=false&agent_uuid=389f433d-052c-4cf1-a9c7-d81a7bbdb93b&ptype=1%2C2%2C8%2C9%2C4%2C3%2C5%2C7&searchType=criteria&omit_hidden=true&ex_pend=true&currency=CAD",
    },
    //9
    {
      id: 9,
      area: "Sorrento",
      link: "/search/#status=active&sold_days=180&pstatus=1%2C11&ls_conversion=acres&company_only=1&location_search_field=Sorrento%2C%20BC&drive_time=09%3A00&drive_duration=15&drive_avoid_ferry=1&drive_departure=1&ss_locale=en-CA&ss_description=Sorrento%2C%20BC%20V0E%200C6%2C%20Canada&ss_email_freq=40&ss_send_zero_result=1&bounds_north=51.22922821890991&bounds_east=-118.85326141903886&bounds_south=50.48632736701023&bounds_west=-119.72392792294511&center_lat=50.87686000000001&center_lon=-119.469938&center_lat_pan=50.85925721237203&center_lon_pan=-119.28859467099198&geotype=PopulatedPlace&user_lat=50.87686000000001&user_lon=-119.469938&pgsize=20&startidx=0&zoom=10&sort_by=11&company_uuid=3341197&commute=0&buffer_miles=0.25&geospatial=true&agent_uuid=389f433d-052c-4cf1-a9c7-d81a7bbdb93b&ptype=1%2C2%2C8%2C9%2C4%2C3%2C5%2C7&searchType=criteria&omit_hidden=true&ex_pend=true&currency=CAD",
      linkAll:
        "/search/#status=active&sold_days=180&pstatus=1%2C11&ls_conversion=acres&company_only=1&location_search_field=Sorrento%2C%20BC&drive_time=09%3A00&drive_duration=15&drive_avoid_ferry=1&drive_departure=1&ss_locale=en-CA&ss_description=Sorrento%2C%20BC%20V0E%200C6%2C%20Canada&ss_email_freq=40&ss_send_zero_result=1&bounds_north=51.22922821890991&bounds_east=-118.86424774716386&bounds_south=50.48632736701023&bounds_west=-119.71294159482011&center_lat=50.87686000000001&center_lon=-119.469938&center_lat_pan=50.85925721237203&center_lon_pan=-119.28859467099198&geotype=PopulatedPlace&user_lat=50.87686000000001&user_lon=-119.469938&pgsize=20&startidx=0&zoom=10&sort_by=11&company_uuid=3341197&commute=0&buffer_miles=0.25&geospatial=true&agent_uuid=389f433d-052c-4cf1-a9c7-d81a7bbdb93b&ptype=1%2C2%2C8%2C9%2C4%2C3%2C5%2C7&searchType=criteria&omit_hidden=true&ex_pend=true&currency=CAD",
    },
    // 10
    {
      id: 10,
      area: "Tappen",
      link: "",
      linkALL:
        "/search/#status=active&sold_days=180&pstatus=1%2C11&ls_conversion=acres&company_only=1&location_search_field=Tappen%2C%20BC&drive_time=09%3A00&drive_duration=15&drive_avoid_ferry=1&drive_departure=1&ss_locale=en-CA&ss_description=Tappen%2C%20BC%20V0E%202X0%2C%20Canada&ss_email_freq=40&ss_send_zero_result=1&bounds_north=50.829043966455124&bounds_east=-119.26838306891536&bounds_south=50.736029030973995&bounds_west=-119.37721638190364&center_lat=50.782998&center_lon=-119.334404&center_lat_pan=50.78255962767538&center_lon_pan=-119.3227997254095&geotype=PopulatedPlace&user_lat=50.782998&user_lon=-119.334404&pgsize=20&startidx=0&zoom=13&sort_by=11&company_uuid=3341197&commute=0&buffer_miles=0.25&geospatial=true&agent_uuid=389f433d-052c-4cf1-a9c7-d81a7bbdb93b&ptype=1%2C2%2C8%2C9%2C4%2C3%2C5%2C7&searchType=criteria&omit_hidden=true&ex_pend=true&currency=CAD",
    },
  ];
  const Kamploops = [
    //1
    {
      id: 1,
      area: "Juniper",
      link: "/search/#status=active&sold_days=180&pstatus=1%2C11&ls_conversion=acres&company_only=1&location_search_field=Juniper%20Ridge%2C%20Kamloops%2C%20BC&drive_time=09%3A00&drive_duration=15&drive_avoid_ferry=1&drive_departure=1&ss_locale=en-CA&ss_description=Juniper%20Ridge%2C%20Kamloops%2C%20BC%2C%20Canada&ss_email_freq=40&ss_send_zero_result=1&bounds_north=50.711819957410256&bounds_east=-120.19194869502985&bounds_south=50.6185717952146&bounds_west=-120.30078200801813&center_lat=50.66302109999999&center_lon=-120.2507928&center_lat_pan=50.66521902446539&center_lon_pan=-120.24636535152399&geotype=Neighborhood&user_lat=50.66302109999999&user_lon=-120.2507928&pgsize=20&startidx=0&zoom=13&sort_by=10&company_uuid=3341197&commute=0&buffer_miles=0.25&geospatial=true&agent_uuid=389f433d-052c-4cf1-a9c7-d81a7bbdb93b&ptype=1%2C2%2C8%2C9%2C4%2C3%2C5%2C7&searchType=criteria&omit_hidden=true&ex_pend=true&currency=CAD",
      linkALL:
        "/search/#status=active&sold_days=180&pstatus=1%2C11&ls_conversion=acres&company_only=1&location_search_field=Juniper%20Ridge%2C%20Kamloops%2C%20BC&drive_time=09%3A00&drive_duration=15&drive_avoid_ferry=1&drive_departure=1&ss_locale=en-CA&ss_description=Juniper%20Ridge%2C%20Kamloops%2C%20BC%2C%20Canada&ss_email_freq=40&ss_send_zero_result=1&bounds_north=50.711819957410256&bounds_east=-120.19194869502985&bounds_south=50.6185717952146&bounds_west=-120.30078200801813&center_lat=50.66302109999999&center_lon=-120.2507928&center_lat_pan=50.66521902446539&center_lon_pan=-120.24636535152399&geotype=Neighborhood&user_lat=50.66302109999999&user_lon=-120.2507928&pgsize=20&startidx=0&zoom=13&sort_by=11&company_uuid=3341197&commute=0&buffer_miles=0.25&geospatial=true&agent_uuid=389f433d-052c-4cf1-a9c7-d81a7bbdb93b&ptype=1%2C2%2C8%2C9%2C4%2C3%2C5%2C7&searchType=criteria&omit_hidden=true&ex_pend=true&currency=CAD",
    },
    //2
    {
      id: 2,
      area: "Sahali",
      link: "/search/#status=active&sold_days=180&pstatus=1%2C11&ls_conversion=acres&company_only=1&location_search_field=Sahali%2C%20Kamloops%2C%20BC&drive_time=09%3A00&drive_duration=15&drive_avoid_ferry=1&drive_departure=1&ss_locale=en-CA&ss_description=Upper%20Sahali%2C%20Kamloops%2C%20BC%2C%20Canada&ss_email_freq=40&ss_send_zero_result=1&bounds_north=50.69933083908558&bounds_east=-120.29472006771036&bounds_south=50.60605785183133&bounds_west=-120.40355338069864&center_lat=50.64817799999999&center_lon=-120.340229&center_lat_pan=50.652717495633304&center_lon_pan=-120.3491367242045&geotype=Neighborhood&user_lat=50.64817799999999&user_lon=-120.340229&pgsize=20&startidx=0&zoom=13&sort_by=10&company_uuid=3341197&commute=0&buffer_miles=0.25&geospatial=true&agent_uuid=389f433d-052c-4cf1-a9c7-d81a7bbdb93b&ptype=1%2C2%2C8%2C9%2C4%2C3%2C5%2C7&searchType=criteria&omit_hidden=true&ex_pend=true&currency=CAD",
    },
    //3
    {
      id: 3,
      area: "Aberdeen",
      link: "/search/#status=active&sold_days=180&pstatus=1%2C11&ls_conversion=acres&company_only=1&location_search_field=Aberdeen%2C%20Kamloops%2C%20BC&drive_time=09%3A00&drive_duration=15&drive_avoid_ferry=1&drive_departure=1&ss_locale=en-CA&ss_description=Aberdeen%2C%20Kamloops%2C%20BC%2C%20Canada&ss_email_freq=40&ss_send_zero_result=1&bounds_north=50.73200860244479&bounds_east=-120.25886345037422&bounds_south=50.54540733694816&bounds_west=-120.47653007635078&center_lat=50.6378157&center_lon=-120.3785375&center_lat_pan=50.63880057932418&center_lon_pan=-120.3676967633625&geotype=Neighborhood&user_lat=50.6378157&user_lon=-120.3785375&pgsize=20&startidx=0&zoom=12&sort_by=10&company_uuid=3341197&commute=0&buffer_miles=0.25&geospatial=true&agent_uuid=389f433d-052c-4cf1-a9c7-d81a7bbdb93b&ptype=1%2C2%2C8%2C9%2C4%2C3%2C5%2C7&searchType=criteria&omit_hidden=true&ex_pend=true&currency=CAD",
    },
    //4
    {
      id: 4,
      area: "South Kamploops",
      link: `/search/#status=active&sold_days=180&pstatus=1%2C11&ls_conversion=acres&company_only=1&drive_time=09%3A00&drive_duration=15&drive_avoid_ferry=1&drive_departure=1&ss_locale=en-CA&ss_description=Aberdeen%2C%20Kamloops%2C%20BC%2C%20Canada&ss_email_freq=40&ss_send_zero_result=1&bounds_north=50.7234785807353&bounds_east=-120.27480918296776&bounds_south=50.630253596804586&bounds_west=-120.38364249595604&center_lat=50.6378157&center_lon=-120.3785375&center_lat_pan=50.67688923503154&center_lon_pan=-120.3292258394619&geotype=CUSTOM&user_lat=50.6378157&user_lon=-120.3785375&pgsize=20&startidx=0&zoom=13&sort_by=10&company_uuid=3341197&commute=0&geolayer=%7B%22custom%22%3Atrue%2C%22geojson%22%3A%7B%22type%22%3A%22MultiPolygon%22%2C%22coordinates%22%3A%5B%5B%5B%5B-120.36341998108826%2C50.66327386252302%5D%2C%5B-120.36341998108826%2C50.66436197150371%5D%2C%5B-120.36307665833435%2C50.66566766899764%5D%2C%5B-120.36170336731873%2C50.66991093510046%5D%2C%5B-120.36136004456482%2C50.670890095893704%5D%2C%5B-120.360673399057%2C50.67176044389831%5D%2C%5B-120.36015841492615%2C50.67230440320694%5D%2C%5B-120.35964343079529%2C50.672739566115524%5D%2C%5B-120.35912844666443%2C50.67317472499004%5D%2C%5B-120.35758349427185%2C50.674480177409386%5D%2C%5B-120.35689684876404%2C50.67491532014782%5D%2C%5B-120.35638186463318%2C50.675241674554314%5D%2C%5B-120.35500857361755%2C50.67611194187823%5D%2C%5B-120.3544935894867%2C50.676438287964686%5D%2C%5B-120.35415026673279%2C50.6766558507617%5D%2C%5B-120.35209033020935%2C50.6777436496195%5D%2C%5B-120.3467688275238%2C50.67959284981644%5D%2C%5B-120.34591052063904%2C50.67981039799056%5D%2C%5B-120.34230563172302%2C50.67981039799056%5D%2C%5B-120.32840106018982%2C50.67959284981644%5D%2C%5B-120.32531115540466%2C50.679484075351205%5D%2C%5B-120.32342288025818%2C50.67937530063387%5D%2C%5B-120.32273623475037%2C50.679266525664396%5D%2C%5B-120.32067629822693%2C50.678940199243314%5D%2C%5B-120.31174990662537%2C50.676982193066316%5D%2C%5B-120.30900332459412%2C50.67632950618799%5D%2C%5B-120.3079733563324%2C50.676003159345186%5D%2C%5B-120.30728671082458%2C50.675785593522704%5D%2C%5B-120.30608508118591%2C50.675241674554314%5D%2C%5B-120.30557009705505%2C50.67491532014782%5D%2C%5B-120.30333849915466%2C50.67328351407835%5D%2C%5B-120.3028235150238%2C50.67284835621235%5D%2C%5B-120.30042025574646%2C50.67034612019657%5D%2C%5B-120.29921862610779%2C50.66827895506095%5D%2C%5B-120.29750201233826%2C50.66436197150371%5D%2C%5B-120.2973303509613%2C50.66370910914103%5D%2C%5B-120.29681536683044%2C50.660771116178%5D%2C%5B-120.29681536683044%2C50.66011820389021%5D%2C%5B-120.2969870282074%2C50.65946528252501%5D%2C%5B-120.29853198059998%2C50.65587405275545%5D%2C%5B-120.2995619488617%2C50.654132751597345%5D%2C%5B-120.30145022400818%2C50.65184719586254%5D%2C%5B-120.30265185364685%2C50.65108531923884%5D%2C%5B-120.30419680603943%2C50.65043227229828%5D%2C%5B-120.31140658387146%2C50.64803768918167%5D%2C%5B-120.31483981141052%2C50.64716690142416%5D%2C%5B-120.316728086557%2C50.64673150149326%5D%2C%5B-120.32067629822693%2C50.64596954190547%5D%2C%5B-120.3222212506195%2C50.64586068952707%5D%2C%5B-120.32359454163513%2C50.64586068952707%5D%2C%5B-120.32531115540466%2C50.64607839403166%5D%2C%5B-120.3270277691742%2C50.646404948897256%5D%2C%5B-120.33097598084412%2C50.64716690142416%5D%2C%5B-120.33303591736755%2C50.64760229732027%5D%2C%5B-120.33595416077576%2C50.6482553835993%5D%2C%5B-120.33784243592224%2C50.64879961523043%5D%2C%5B-120.35260531434021%2C50.65315324132779%5D%2C%5B-120.35363528260193%2C50.653479747020434%5D%2C%5B-120.35638186463318%2C50.65467691514364%5D%2C%5B-120.35878512391052%2C50.65598288193448%5D%2C%5B-120.3599867535492%2C50.65707115985611%5D%2C%5B-120.3603300763031%2C50.65739763831554%5D%2C%5B-120.36153170594177%2C50.65859470658418%5D%2C%5B-120.36187502869568%2C50.65902999657181%5D%2C%5B-120.36221835144958%2C50.659574103382916%5D%2C%5B-120.36273333558044%2C50.6604446611688%5D%2C%5B-120.3632483197113%2C50.66142401938842%5D%2C%5B-120.36341998108826%2C50.66327386252302%5D%2C%5B-120.36341998108826%2C50.66327386252302%5D%5D%5D%5D%7D%2C%22geolayerid%22%3A-1%2C%22templateids%22%3A%5B%5D%7D&buffer_miles=0.25&geospatial=true&agent_uuid=389f433d-052c-4cf1-a9c7-d81a7bbdb93b&ptype=1%2C2%2C8%2C9%2C4%2C3%2C5%2C7&searchType=criteria&omit_hidden=true&ex_pend=true&currency=CAD`,
    },
    //5
    {
      id: 5,
      area: "Dufferin",
      link: "/search/#status=active&sold_days=180&pstatus=1%2C11&ls_conversion=acres&company_only=1&location_search_field=Dufferin%2C%20Kamloops%2C%20BC&drive_time=09%3A00&drive_duration=15&drive_avoid_ferry=1&drive_departure=1&ss_locale=en-CA&ss_description=Dufferin%2C%20Kamloops%2C%20BC%20V2E%202M3%2C%20Canada&ss_email_freq=40&ss_send_zero_result=1&bounds_north=50.71872850794301&bounds_east=-120.34168702360488&bounds_south=50.625494080024644&bounds_west=-120.45052033659316&center_lat=50.6601961&center_lon=-120.3857858&center_lat_pan=50.67213444101649&center_lon_pan=-120.39610368009902&geotype=Neighborhood&user_lat=50.6601961&user_lon=-120.3857858&pgsize=20&startidx=0&zoom=13&sort_by=10&company_uuid=3341197&commute=0&buffer_miles=0.25&geospatial=true&agent_uuid=389f433d-052c-4cf1-a9c7-d81a7bbdb93b&ptype=1%2C2%2C8%2C9%2C4%2C3%2C5%2C7&searchType=criteria&omit_hidden=true&ex_pend=true&currency=CAD",
    },
    //6
    {
      id: 6,
      area: "Brokelhurst",
      link: "/search/#status=active&sold_days=180&pstatus=1%2C11&ls_conversion=acres&company_only=1&location_search_field=Brocklehurst%2C%20Tobiano%2C%20Kamloops%2C%20BC&drive_time=09%3A00&drive_duration=15&drive_avoid_ferry=1&drive_departure=1&ss_locale=en-CA&ss_description=Brocklehurst%2C%20Kamloops%2C%20BC%20V2B%2C%20Canada&ss_email_freq=40&ss_send_zero_result=1&bounds_north=50.77282465420745&bounds_east=-120.33958330343786&bounds_south=50.679697817032135&bounds_west=-120.44841661642614&center_lat=50.710803&center_lon=-120.409878&center_lat_pan=50.7262843738334&center_lon_pan=-120.393999959932&geotype=Neighborhood&user_lat=50.710803&user_lon=-120.409878&pgsize=20&startidx=0&zoom=13&sort_by=10&company_uuid=3341197&commute=0&buffer_miles=0.25&geospatial=true&agent_uuid=389f433d-052c-4cf1-a9c7-d81a7bbdb93b&ptype=1%2C2%2C8%2C9%2C4%2C3%2C5%2C7&searchType=criteria&omit_hidden=true&ex_pend=true&currency=CAD",
      linkAll:
        "/search/#status=active&sold_days=180&pstatus=1%2C11&ls_conversion=acres&company_only=1&location_search_field=Brocklehurst%2C%20Tobiano%2C%20Kamloops%2C%20BC&drive_time=09%3A00&drive_duration=15&drive_avoid_ferry=1&drive_departure=1&ss_locale=en-CA&ss_description=Brocklehurst%2C%20Kamloops%2C%20BC%20V2B%2C%20Canada&ss_email_freq=40&ss_send_zero_result=1&bounds_north=50.77282465420745&bounds_east=-120.33958330343786&bounds_south=50.679697817032135&bounds_west=-120.44841661642614&center_lat=50.710803&center_lon=-120.409878&center_lat_pan=50.7262843738334&center_lon_pan=-120.393999959932&geotype=Neighborhood&user_lat=50.710803&user_lon=-120.409878&pgsize=20&startidx=0&zoom=13&sort_by=10&company_uuid=3341197&commute=0&buffer_miles=0.25&geospatial=true&agent_uuid=389f433d-052c-4cf1-a9c7-d81a7bbdb93b&ptype=1%2C2%2C8%2C9%2C4%2C3%2C5%2C7&searchType=criteria&omit_hidden=true&ex_pend=true&currency=CAD",
    },
    //7
    {
      id: 7,
      area: "North Shore",
      link: "/search/#status=active&sold_days=180&pstatus=1%2C11&ls_conversion=acres&company_only=1&location_search_field=North%20Shore%2C%20Kamloops%2C%20BC&drive_time=09%3A00&drive_duration=15&drive_avoid_ferry=1&drive_departure=1&ss_locale=en-CA&ss_description=North%20Shore%2C%20Kamloops%2C%20BC%2C%20Canada&ss_email_freq=40&ss_send_zero_result=1&bounds_north=50.7426762399987&bounds_east=-120.31070490846835&bounds_south=50.64948943096811&bounds_west=-120.41953822145663&center_lat=50.6961624&center_lon=-120.3643267&center_lat_pan=50.69610597862217&center_lon_pan=-120.3651215649625&geotype=Neighborhood&user_lat=50.6961624&user_lon=-120.3643267&pgsize=20&startidx=0&zoom=13&sort_by=10&company_uuid=3341197&commute=0&buffer_miles=0.25&geospatial=true&agent_uuid=389f433d-052c-4cf1-a9c7-d81a7bbdb93b&ptype=1%2C2%2C8%2C9%2C4%2C3%2C5%2C7&searchType=criteria&omit_hidden=true&ex_pend=true&currency=CAD",
      linkALL:
        "/search/#status=active&sold_days=180&pstatus=1%2C11&ls_conversion=acres&company_only=1&location_search_field=North%20Shore%2C%20Kamloops%2C%20BC&drive_time=09%3A00&drive_duration=15&drive_avoid_ferry=1&drive_departure=1&ss_locale=en-CA&ss_description=North%20Shore%2C%20Kamloops%2C%20BC%2C%20Canada&ss_email_freq=40&ss_send_zero_result=1&bounds_north=50.7426762399987&bounds_east=-120.31070490846835&bounds_south=50.64948943096811&bounds_west=-120.41953822145663&center_lat=50.6961624&center_lon=-120.3643267&center_lat_pan=50.69610597862217&center_lon_pan=-120.3651215649625&geotype=Neighborhood&user_lat=50.6961624&user_lon=-120.3643267&pgsize=20&startidx=0&zoom=13&sort_by=10&company_uuid=3341197&commute=0&buffer_miles=0.25&geospatial=true&agent_uuid=389f433d-052c-4cf1-a9c7-d81a7bbdb93b&ptype=1%2C2%2C8%2C9%2C4%2C3%2C5%2C7&searchType=criteria&omit_hidden=true&ex_pend=true&currency=CAD",
    },
    //8
    {
      id: 8,
      area: "WestSyde",
      link: "/search/#status=active&sold_days=180&pstatus=1%2C11&ls_conversion=acres&company_only=1&location_search_field=Westsyde%2C%20Kamloops%2C%20BC&drive_time=09%3A00&drive_duration=15&drive_avoid_ferry=1&drive_departure=1&ss_locale=en-CA&ss_description=Westsyde%2C%20Kamloops%2C%20BC%20V2B%2C%20Canada&ss_email_freq=40&ss_send_zero_result=1&bounds_north=50.84466460757336&bounds_east=-120.23661186164122&bounds_south=50.65851188041667&bounds_west=-120.45427848761778&center_lat=50.7575138&center_lon=-120.3490077&center_lat_pan=50.75168078013749&center_lon_pan=-120.3454451746295&geotype=Neighborhood&user_lat=50.7575138&user_lon=-120.3490077&pgsize=20&startidx=0&zoom=12&sort_by=10&company_uuid=3341197&commute=0&buffer_miles=0.25&geospatial=true&agent_uuid=389f433d-052c-4cf1-a9c7-d81a7bbdb93b&ptype=1%2C2%2C8%2C9%2C4%2C3%2C5%2C7&searchType=criteria&omit_hidden=true&ex_pend=true&currency=CAD",
      linkAll:
        "/search/#status=active&sold_days=180&pstatus=1%2C11&ls_conversion=acres&location_search_field=Westsyde%2C%20Kamloops%2C%20BC&drive_time=09%3A00&drive_duration=15&drive_avoid_ferry=1&drive_departure=1&ss_locale=en-CA&ss_description=Westsyde%2C%20Kamloops%2C%20BC%20V2B%2C%20Canada&ss_email_freq=40&ss_send_zero_result=1&bounds_north=50.84466460757336&bounds_east=-120.23661186164122&bounds_south=50.65851188041667&bounds_west=-120.45427848761778&center_lat=50.7575138&center_lon=-120.3490077&center_lat_pan=50.75168078013749&center_lon_pan=-120.3454451746295&geotype=Neighborhood&user_lat=50.7575138&user_lon=-120.3490077&pgsize=20&startidx=0&zoom=12&sort_by=10&company_uuid=3341197&commute=0&buffer_miles=0.25&geospatial=true&agent_uuid=389f433d-052c-4cf1-a9c7-d81a7bbdb93b&ptype=1%2C2%2C8%2C9%2C4%2C3%2C5%2C7&searchType=criteria&omit_hidden=true&ex_pend=true&currency=CAD",
    },
    //9
    {
      id: 9,
      area: "Batchelor Heights",
      link: "/search/#status=active&sold_days=180&pstatus=1%2C11&ls_conversion=acres&company_only=1&location_search_field=Batchelor%20Heights%2C%20Tobiano%2C%20Kamloops%2C%20BC&drive_time=09%3A00&drive_duration=15&drive_avoid_ferry=1&drive_departure=1&ss_locale=en-CA&ss_description=Tobiano%2C%20Kamloops%2C%20BC%20V0K%202J0%2C%20Canada&ss_email_freq=40&ss_send_zero_result=1&bounds_north=51.55772680325442&bounds_east=-119.82226841867374&bounds_south=50.07066242908852&bounds_west=-121.56360142648624&center_lat=50.73297119999999&center_lon=-120.6928349&center_lat_pan=50.82011374755743&center_lon_pan=-120.69293492258&geotype=Neighborhood&user_lat=50.73297119999999&user_lon=-120.6928349&pgsize=20&startidx=0&zoom=9&sort_by=10&company_uuid=3341197&commute=0&buffer_miles=0.25&geospatial=true&agent_uuid=389f433d-052c-4cf1-a9c7-d81a7bbdb93b&ptype=1%2C2%2C8%2C9%2C4%2C3%2C5%2C7&searchType=criteria&omit_hidden=true&ex_pend=true&currency=CAD",
      linkALL:
        "/search/#status=active&sold_days=180&pstatus=1%2C11&ls_conversion=acres&company_only=1&location_search_field=Batchelor%20Heights%2C%20Tobiano%2C%20Kamloops%2C%20BC&drive_time=09%3A00&drive_duration=15&drive_avoid_ferry=1&drive_departure=1&ss_locale=en-CA&ss_description=Tobiano%2C%20Kamloops%2C%20BC%20V0K%202J0%2C%20Canada&ss_email_freq=40&ss_send_zero_result=1&bounds_north=51.55772680325442&bounds_east=-119.82226841867374&bounds_south=50.07066242908852&bounds_west=-121.56360142648624&center_lat=50.73297119999999&center_lon=-120.6928349&center_lat_pan=50.82011374755743&center_lon_pan=-120.69293492258&geotype=Neighborhood&user_lat=50.73297119999999&user_lon=-120.6928349&pgsize=20&startidx=0&zoom=9&sort_by=10&company_uuid=3341197&commute=0&buffer_miles=0.25&geospatial=true&agent_uuid=389f433d-052c-4cf1-a9c7-d81a7bbdb93b&ptype=1%2C2%2C8%2C9%2C4%2C3%2C5%2C7&searchType=criteria&omit_hidden=true&ex_pend=true&currency=CAD",
    },
    // 10
    {
      id: 10,
      area: "Sun Rivers",
      link: "/search/#status=active&sold_days=180&pstatus=1%2C11&ls_conversion=acres&company_only=1&location_search_field=Sun%20Rivers%20Drive%2C%20Kamloops%2C%20BC&drive_time=09%3A00&drive_duration=15&drive_avoid_ferry=1&drive_departure=1&ss_locale=en-CA&ss_description=Sun%20Rivers%20Dr%2C%20Kamloops%2C%20BC%20V2H%2C%20Canada&ss_email_freq=40&ss_send_zero_result=1&bounds_north=50.780474804252016&bounds_east=-120.18526743701172&bounds_south=50.594066417427754&bounds_west=-120.40293406298828&center_lat=50.73297119999999&center_lon=-120.6928349&center_lat_pan=50.68736318902941&center_lon_pan=-120.29410075&user_lat=50.6879089&user_lon=-120.2940238&pgsize=20&startidx=0&zoom=12&sort_by=11&company_uuid=3341197&commute=0&buffer_miles=0.25&geospatial=false&agent_uuid=389f433d-052c-4cf1-a9c7-d81a7bbdb93b&ptype=1%2C2%2C8%2C9%2C4%2C3%2C5%2C7&searchType=criteria&omit_hidden=true&ex_pend=true&currency=CAD",
      linkAll:
        "/search/#status=active&sold_days=180&pstatus=1%2C11&ls_conversion=acres&company_only=1&location_search_field=Sun%20Rivers%20Drive%2C%20Kamloops%2C%20BC&drive_time=09%3A00&drive_duration=15&drive_avoid_ferry=1&drive_departure=1&ss_locale=en-CA&ss_description=Sun%20Rivers%20Dr%2C%20Kamloops%2C%20BC%20V2H%2C%20Canada&ss_email_freq=40&ss_send_zero_result=1&bounds_north=50.780474804252016&bounds_east=-120.18526743701172&bounds_south=50.594066417427754&bounds_west=-120.40293406298828&center_lat=50.73297119999999&center_lon=-120.6928349&center_lat_pan=50.68736318902941&center_lon_pan=-120.29410075&user_lat=50.6879089&user_lon=-120.2940238&pgsize=20&startidx=0&zoom=12&sort_by=11&company_uuid=3341197&commute=0&buffer_miles=0.25&geospatial=false&agent_uuid=389f433d-052c-4cf1-a9c7-d81a7bbdb93b&ptype=1%2C2%2C8%2C9%2C4%2C3%2C5%2C7&searchType=criteria&omit_hidden=true&ex_pend=true&currency=CAD",
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

  const Neighborhoods = [Revelstoke, Sicamous, Vernon, SalmonArm, Kamploops];
  return (
    <div className="linkspage-container">
      <div>
        {" "}
        {/* <LinksPageButton Neighborhood={Neighborhoods[0]} /> */}
        <h1>Revelstoke</h1>
        <button></button>
        {Neighborhoods[0].map((area) => (
          <>
            <h3>{area.area}</h3>
            <div className="link-unit">{`${linkOpener}${area.link}`}</div>
            <button
              className="btn btn-primary"
              onClick={() =>
                copyTextToClipboard(
                  `<li><a href="${linkOpener}${area.link}">${area.area}<span class="arrow-icon">&#10142;</span></a></li>`
                )
              }
            >
              Copy
            </button>
          </>
        ))}
      </div>

      <div>
        <h1>Sicamous</h1>
        {Neighborhoods[1].map((area) => (
          <>
            <h3>{area.area}</h3>
            <div className="link-unit">{`${linkOpener}${area.link}`}</div>
            <button
              className="btn btn-primary"
              onClick={() =>
                copyTextToClipboard(
                  `<li><a href="${linkOpener}${area.link}">${area.area}<span class="arrow-icon">&#10142;</span></a></li>`
                )
              }
            >
              Copy
            </button>
          </>
        ))}
      </div>

      <div>
        <h1>Vernon</h1>
        {Neighborhoods[2].map((area) => (
          <>
            <h3>{area.area}</h3>
            <div className="link-unit">{`${linkOpener}${area.link}`}</div>
            <button
              className="btn btn-primary"
              onClick={() =>
                copyTextToClipboard(
                  `<li><a href="${linkOpener}${area.link}">${area.area}<span class="arrow-icon">&#10142;</span></a></li>`
                )
              }
            >
              Copy
            </button>
          </>
        ))}
      </div>

      <div>
        <h1>Salmon Arm</h1>
        {Neighborhoods[3].map((area, key) => (
          <>
            <h3>
              {key}
              {"."}
              {area.area}
            </h3>
            <div className="link-unit">{`${linkOpener}${area.link}`}</div>
            <button
              className="btn btn-primary"
              onClick={() =>
                copyTextToClipboard(
                  `<li><a href="${linkOpener}${area.link}">${area.area}<span class="arrow-icon">&#10142;</span></a></li>`
                )
              }
            >
              Copy
            </button>
          </>
        ))}
      </div>

      <div>
        <h1>Kamploops</h1>

        {Neighborhoods[4].map((area, key) => (
          <>
            <h3>
              {key}
              {"."}
              {area.area}
            </h3>
            <div className="link-unit">{`${linkOpener}${area.link}`}</div>
            <button
              className="btn btn-primary"
              onClick={() =>
                copyTextToClipboard(
                  `<li><a href="${linkOpener}${area.link}">${area.area}<span class="arrow-icon">&#10142;</span></a></li>`
                )
              }
            >
              Copy
            </button>
          </>
        ))}
      </div>
    </div>
  );
};
