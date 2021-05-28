<template>
    <div class="error-page">
        <div class="pic-404">
            <img
                class="pic-404__parent"
                src="@/assets/404_images/404.png"
                alt
            />
        </div>
        <div class="notFound">
            <span>当前访问的页面不存在</span>
            <span>
                可以尝试
                <a class="link" @click="$router.go(-1)">返回上一页</a>
            </span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'NotFound'
}
</script>

<style lang="scss" scoped>
.error-page {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    .pic-404 {
        .pic-404__parent {
            display: block;
            width: 100%;
        }
    }
    .notFound {
        span {
            display: block;
            font-size: 0.36rem;
            color: #8b7b8b;
            .link {
                color: #5cacee;
                font-size: 0.4rem;
                cursor: pointer;
            }
        }
    }
}
</style>
