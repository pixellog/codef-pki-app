<template>
    <div class="d-flex flex-column min-vh-100 flex-nowrap">
        <header class="d-flex align-items-center justify-content-between border-bottom px-2" style="height: 44px;">
            <b-link>취소</b-link>
            <strong>인증서 등록</strong>
            <b-link><b-icon-question-circle></b-icon-question-circle></b-link>
        </header>
        <div class="content flex-grow-1 overflow-auto">
            <b-alert show variant="secondary" class="rounded-0">
                <p>계좌와 카드 내역을 불러오기 위해 최초 1회 필요합니다. <br>
                    인증서는 서버에 저장하지 않습니다.</p>
                <b-link class="text-primary">
                    <b-icon-shield-fill class="mr-2"></b-icon-shield-fill>
                    보안 정책 보기
                </b-link>
            </b-alert>
            <div class="p-3">
                <ul class="list-unstyled">
                    <li>
                        <strong>PC에서 접속</strong> <br>
                        <small class="text-muted">(성공적인 인증서 등록)</small>
                    </li>
                    <li class="mt-5 d-flex align-items-center">
                        <strong>상단의 <b-button size="sm" variant="outline-primary">공인인증서 복사</b-button> 버튼 클릭</strong>
                    </li>
                    <li class="mt-5">
                        <strong>공인인증서 로그인 후 아래 인증번호 입력</strong> <br>
                        <b-button size="sm" variant="primary" class="mt-2">인증번호 받기</b-button>
                        <b-row align-v="center" class="m-0 mt-3">
                            <b-input value="1234" class="col-3 text-primary font-weight-bold"></b-input> <span class="px-2">-</span>
                            <b-input value="1234" class="col-3 text-primary font-weight-bold"></b-input> <span class="px-2">-</span>
                            <b-input value="1234" class="col-3 text-primary font-weight-bold"></b-input>
                        </b-row>
                    </li>
                    <li class="mt-5"><h6>완료!</h6></li>
                </ul>
            </div>
        </div>
        <footer>
            <b-button squared block size="lg" variant="primary">다음</b-button>
        </footer>
    </div>
</template>

<script>
    export default {
        name: 'Step_2',
    }
</script>
