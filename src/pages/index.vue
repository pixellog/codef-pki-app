<template>
    <div class="p-5 text-center">
        <b-button @click="showCertCopy" variant="primary" size="lg" class="px-5">공인인증서 복사하기</b-button>
        <br>
        <img class="mt-3"
             src="../assets/images/pki-pc-01.png"
             srcset="../assets/images/pki-pc-01@2x.png 2x,
                     ../assets/images/pki-pc-01@3x.png 3x">
        <cert hidden />
    </div>
</template>

<script>
    import Cert from "@/components/cert";
    export default {
        name : 'index',
        components: {Cert},
        mounted() {
            this.showCertCopy();
            this.showCertCopyAlert();
        },
        methods: {
            showCertCopy() {
                const h = this.$createElement;
                const el = 'cert';
                const messageVNode = h(el);
                this.$bvModal
                    .msgBoxConfirm([messageVNode], {
                        centered: true,
                        title: '공인인증서 복사하기',
                        cancelTitle : '취소(종료)',
                        headerClass:'bg-primary text-white',
                    })
            },
            showCertCopyAlert() {
                this.$bvModal
                    .msgBoxOk('인증서 복사가 완료되었습니다.', {
                        centered: true,
                        title: '알림',
                        headerCloseVariant:'primary',
                        headerClass:'border-bottom text-primary',
                        bodyClass : 'text-center',
                    })
            }
        }
    }
</script>
