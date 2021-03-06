require("./bootstrap");

window.moment = require("moment");

window.Chart = require("chart.js");

window.Vue = require("vue");

window.events = new Vue();

Vue.component(
    "local-ambiente-component",
    require("./components/LocalAmbienteComponent.vue").default
);
Vue.component(
    "setor-servico-component",
    require("./components/SetorServicoComponent.vue").default
);
Vue.component(
    "create-update-chamado-component",
    require("./components/chamados/CreateUpdate.vue").default
);
Vue.component(
    "details-chamado-component",
    require("./components/chamados/Detail.vue").default
);
Vue.component(
    "mao-obra-chamado-component",
    require("./components/chamados/MaoObra.vue").default
);
Vue.component(
    "status-chamado-component",
    require("./components/chamados/Status.vue").default
);
Vue.component(
    "description-chamado-component",
    require("./components/chamados/Description.vue").default
);
Vue.component(
    "edit-setor-servico-chamado-component",
    require("./components/chamados/EditSetorServico.vue").default
);
Vue.component(
    "index-chamado-component",
    require("./components/chamados/Index.vue").default
);
Vue.component(
    "report-chamado-component",
    require("./components/chamados/Report.vue").default
);
Vue.component(
    "table-row-component",
    require("./components/chamados/TableRow.vue").default
);
Vue.component(
    "modal-chamado-component",
    require("./components/chamados/Modal.vue").default
);
Vue.component(
    "paginator-component",
    require("./components/Utilities/Paginator.vue").default
);
Vue.component(
    "create-interacao-component",
    require("./components/interacoes/Create.vue").default
);

Vue.component(
    "chart-setores-component",
    require("./components/charts/Setores.vue").default
);
Vue.component(
    "chart-servicos-component",
    require("./components/charts/Servicos.vue").default
);
Vue.component(
    "chart-status-component",
    require("./components/charts/Status.vue").default
);

const app = new Vue({
    el: "#app",
});
