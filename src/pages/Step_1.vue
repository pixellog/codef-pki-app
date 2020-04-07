<template>
    <div class="d-flex flex-column min-vh-100 flex-nowrap">
        <header class="d-flex align-items-center justify-content-between border-bottom px-2" style="height: 44px;">
            <b-link><b-icon-chevron-left scale="1.5" class="mr-2"></b-icon-chevron-left>서비스 설정</b-link>
            <strong>공인인증서 관리</strong>
            <b-link>추가</b-link>
        </header>
        <div class="content flex-grow-1 overflow-auto">
            <div class="items">
                <div class="item d-flex p-3 border-bottom flex-nowrap align-items-center" v-for="i in [0,1,2,3]" v-bind:key="i">
                    <b-icon-lock scale="2" class="text-muted"></b-icon-lock>
                    <div class="col-auto pl-4">
                        <strong class="d-block text-truncate">서성권(Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet cupiditate deleniti dolor est exercitationem maiores quaerat veritatis voluptates. Culpa deserunt est in incidunt ipsa maxime mollitia odio perspiciatis quod saepe.)</strong>
                        <div class="text-muted my-1">은행개인, 만료일 : 2020.6.15</div>
                        <b-button size="sm" variant="outline-secondary" class="px-4">인증서 삭제</b-button>
                    </div>
                </div>
            </div>
        </div>
        <footer class="d-flex">
            <b-button squared class="col d-flex align-items-center flex-column"><b-icon-star></b-icon-star>MY금융</b-button>
            <b-button squared class="col d-flex align-items-center flex-column"><b-icon-star></b-icon-star>재테크</b-button>
            <b-button squared class="col d-flex align-items-center flex-column"><b-icon-star></b-icon-star>금융비서</b-button>
            <b-button squared class="col d-flex align-items-center flex-column"><b-icon-star></b-icon-star>맞춤추천</b-button>
            <b-button squared class="col d-flex align-items-center flex-column"><b-icon-star></b-icon-star>더보기</b-button>
        </footer>
    </div>
</template>

<script>
    export default {
        name: 'Step_1',
    }
</script>
