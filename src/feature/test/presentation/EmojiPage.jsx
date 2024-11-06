import React from 'react';
const matreshka = { simvol: ' -@#&- ', src: 'https://cdn3.iconfinder.com/data/icons/free-icons-3/512/red_matreshka_big.png' }
const dollar = { simvol: ' -$#&- ', src: 'https://cdn3.iconfinder.com/data/icons/free-icons-3/128/004_money_dollar_cash_coins_riches_wealth.png' }
const present = { simvol: ' -*#&- ', src: 'https://cdn3.iconfinder.com/data/icons/free-icons-3/128/002_present_bonus.png' }
const palm = { simvol: ' -%#&- ', src: 'https://cdn3.iconfinder.com/data/icons/free-icons-3/128/003_palm_beach_travel_vacation_leisure.png' }
function EmojiPage(props) {
    return (
        <div>
            <textarea
                name="message"
                cols="30"
                rows="10">
                    &#128512; &#128516; &#128525; &#128151;
            </textarea>
        </div>
    );
}

export default EmojiPage;