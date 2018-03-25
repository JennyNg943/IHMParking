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

    var aModif = document.createElement('button');
    aModif.setAttribute('type', 'button');
    aModif.setAttribute('class', 'modBtn btn');
    aModif.setAttribute('onclick', 'modParkingOpen("'+parkName+'")');
    aModif.innerHTML += '<img src="IMG/Modifier.png" style="width: 1rem;" alt="Modifier">';

    var aSuppr = document.createElement('button');
    aSuppr.setAttribute('onclick', 'delParking("'+parkName+'")');
    aSuppr.setAttribute('class', 'btn');
    aSuppr.setAttribute('type', 'button');
    aSuppr.innerHTML += ' <img src="IMG/Supprimer.png" style="width: 1rem;" alt="Supprimer">';


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

    if(type === 'Auto'){
        document.getElementById('modType1').setAttribute('checked', 'checked');
    } else if (type === 'Vélo'){
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

$(document).ready(function () {

    /**
     * @description: event barre de recherche : quand on appuie sur une touche dans l'input, on va chercher
     *               tous les noms de parking et on les parcourt : si un nom contient ce que l'user a tapé
     *               dans l'input, on affiche la ligne du tableau correspondante, sinon on la cache
     *               (display table-row parce que c'est le seul qui ne casse pas tout)
     */
    $('#searchBar').keyup(function () {
        var user_input = this.value;
        if(user_input.length > 0){
            search(user_input);
        }else{
            $('.parking_name').each(function (key, value) {
                value.parentNode.style.display = 'table-row';
            });
        }
    });

    var availableTags = [];

    /**
     * @description: autocomplete avec jQuery-UI
     */
    setTimeout(function () {
        $('.parking_name').each(function (key, value) {
            availableTags.push(value.innerText);
        });

        $( "#searchBar" ).autocomplete({
            source: availableTags,
            select: function( event, ui ) {
                search(ui.item.value);
            }
        });
    });

});

/**
 * @description: cherche un parking avec le nom passé en paramètre
 * @param user_input: nom du parking à rechercher
 */
function search(user_input){
    $('.parking_name').each(function (key, value) {
        if(value.innerText.toString().toLowerCase().includes(user_input.toLowerCase())){
            value.parentNode.style.display = 'table-row';
        }else{
            value.parentNode.style.display = 'none';
        }
    });
}



