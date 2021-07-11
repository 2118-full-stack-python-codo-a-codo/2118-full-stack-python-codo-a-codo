export default class MainView {
    show(padre, data, callback) {
        let html = ` <div class="row">`;
        let team = data;
        for (const team of data) {
            html += ` <div class="col">
                <div class="card mb-3">
                <iframe src="https://discord.com/widget?id=863831628723650581&theme=dark" width="350" height="500" allowtransparency="true" frameborder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
                    <div class="card-body">
                    <h5 class="card-title">${team.name} </h5>
                    <p class="card-text"> ${team.description}.</p>
                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                    <button class="btnComprar">Open Project</button>
                    </div>
                </div>
            </div>`;
        }

        html += ` </div>`;

        $(padre).html(html);
        $(".btnComprar").click(callback);
    }
}