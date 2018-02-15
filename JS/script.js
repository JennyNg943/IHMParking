function delParking(park){
        var item = document.getElementById(park);
        item.parentNode.removeChild(item);
      }

      function addPark(n, t, g, p, m, c){
        var parkName = document.getElementById(n).value;
        var parkType = document.getElementsByName(t);
        for (var i = 0, length = parkType.length; i < length; i++)
        {
         if (parkType[i].checked)
         {
          parkType = parkType[i].value;
          break;
         }
        }

        var parkGPS = document.getElementById(g).value;
        var parkPlace = document.getElementById(p).value;
        var parkMail = document.getElementById(m).value;
        var parkCompt = document.getElementById(c).value;
        
        var park = document.createElement('tr');
        park.setAttribute('id', parkName);

        var parkTdNom = document.createElement('td');
        parkTdNom.setAttribute('id', 'name');
        parkTdNom.innerHTML += parkName;
        var parkTdType = document.createElement('td');
        parkTdType.setAttribute('id', 'type');
        parkTdType.innerHTML += parkType;
        var parkTdGPS = document.createElement('td');
        parkTdGPS.setAttribute('id', 'GPS');
        parkTdGPS.innerHTML += parkGPS;
        var parkTdPlace = document.createElement('td');
        parkTdPlace.setAttribute('id', 'place');
        parkTdPlace.innerHTML += parkPlace;
        var parkTdMail = document.createElement('td');
        parkTdMail.setAttribute('id', 'mail');
        parkTdMail.innerHTML += parkMail;
        var parkTdCompt = document.createElement('td');
        parkTdCompt.setAttribute('id', 'compt');
        parkTdCompt.innerHTML += parkCompt;
        var parkTdAction = document.createElement('td');

        var aModif = document.createElement('a');
        aModif.setAttribute('href', '#');
        aModif.setAttribute('class', 'modBtn');
        aModif.setAttribute('onclick', 'modParkingOpen("'+parkName+'")');
        aModif.innerHTML += 'Modifier';
        var aSuppr = document.createElement('a');
        aSuppr.setAttribute('href', '#');
        aSuppr.setAttribute('onclick', 'delParking("'+parkName+'")');
        aSuppr.innerHTML += ' Supprimer';

        parkTdAction.appendChild(aModif);
        parkTdAction.appendChild(aSuppr);

        park.appendChild(parkTdNom);
        park.appendChild(parkTdType);
        park.appendChild(parkTdGPS);
        park.appendChild(parkTdPlace);
        park.appendChild(parkTdMail);
        park.appendChild(parkTdCompt);
        park.appendChild(parkTdAction);

        document.getElementById('listParking').appendChild(park);

      }

      function modParkingOpen(p){
        var park = document.getElementById(p);
        var name = park.querySelector('#name').innerHTML;
        var type = park.querySelector('#type').innerHTML;
        var GPS = park.querySelector('#GPS').innerHTML;
        var place = park.querySelector('#place').innerHTML;
        var mail = park.querySelector('#mail').innerHTML;
        var compt = park.querySelector('#compt').innerHTML;

        document.getElementById('modifParkLabel').innerHTML = p;

        $('#modNom').val(name);
        $('#modGPS').val(GPS);
        $('#modPlace').val(place);
        $('#modMail').val(mail);
        $('#modCompt').val(compt);

        if(type == 'Auto'){
            document.getElementById('modType1').setAttribute('checked', 'checked');
        } else if (type == 'Vélo'){
            document.getElementById('modType2').setAttribute('checked', 'checked');
        } else {
            document.getElementById('modType3').setAttribute('checked', 'checked');
        }

      }

      function modParking(pa, n, t, g, p, m, c){
        var park = document.getElementById(document.getElementById(pa).innerHTML);
        var parkName = document.getElementById(n).value;
        var parkType = document.getElementsByName(t);
        for (var i = 0, length = parkType.length; i < length; i++)
        {
         if (parkType[i].checked)
         {
          parkType = parkType[i].value;
          break;
         }
        }

        var parkGPS = document.getElementById(g).value;
        var parkPlace = document.getElementById(p).value;
        var parkMail = document.getElementById(m).value;
        var parkCompt = document.getElementById(c).value;

        park.querySelector('#name').innerHTML = parkName;
        park.querySelector('#type').innerHTML = parkType;
        park.querySelector('#GPS').innerHTML = parkGPS;
        park.querySelector('#place').innerHTML = parkPlace;
        park.querySelector('#mail').innerHTML = parkMail;
        park.querySelector('#compt').innerHTML = parkCompt;
      }