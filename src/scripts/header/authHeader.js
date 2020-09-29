export const authHeaderRender = () => {
    contentTarget.innerHTML = `
    <header class="auth--header">
          <div class="ballLogoContainer">
            <img class="authLogoBall" src="images/The_Coven_Code_Ball_200x200.png" alt="Black blended to Brown blended to blue crystal ball">
          </div>
          <div class="textLogoContainer">
            <img class="authLogoText" src="images/The_Coven_Code_Text_200x200.png" alt="Blue blended to Brown text that reads 'THe Coven Code'">
          </div>
        </header>
          <div class="columns">
            <section class="auth--register border"></section>
            <section class="auth--login border"></section>
          </div>
    `
}