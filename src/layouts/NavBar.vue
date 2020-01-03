<template>
  <div class="layout">
    <header class="header">
      <nav class="nav border-b-2 px-4 py-2 flex items-center justify-between fixed w-full">
        <div class="navbar-logo logo p-2 mr-2 rounded-full hover:bg-gray-400">
          <g-link to="/" class>
            <svg
              class="gUZ lZJ U9O kVc"
              height="28"
              width="28"
              viewBox="0 0 24 24"
              aria-hidden="true"
              aria-label
              role="img"
              fill="red"
            >
              <path
                d="M0 12c0 5.123 3.211 9.497 7.73 11.218-.11-.937-.227-2.482.025-3.566.217-.932 1.401-5.938 1.401-5.938s-.357-.715-.357-1.774c0-1.66.962-2.9 2.161-2.9 1.02 0 1.512.765 1.512 1.682 0 1.025-.653 2.557-.99 3.978-.281 1.189.597 2.159 1.769 2.159 2.123 0 3.756-2.239 3.756-5.471 0-2.861-2.056-4.86-4.991-4.86-3.398 0-5.393 2.549-5.393 5.184 0 1.027.395 2.127.889 2.726a.36.36 0 0 1 .083.343c-.091.378-.293 1.189-.332 1.355-.053.218-.173.265-.4.159-1.492-.694-2.424-2.875-2.424-4.627 0-3.769 2.737-7.229 7.892-7.229 4.144 0 7.365 2.953 7.365 6.899 0 4.117-2.595 7.431-6.199 7.431-1.211 0-2.348-.63-2.738-1.373 0 0-.599 2.282-.744 2.84-.282 1.084-1.064 2.456-1.549 3.235C9.584 23.815 10.77 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12"
              />
            </svg>
          </g-link>
        </div>
        <div class="border-50 rounded-full px-3 py-1 mr-2 hover:bg-gray-400">
          <select name id class="bg-transparent font-bold focus:outline-none">
            <option value class="font-bold p-5">アナリティクス</option>
            <option value class="font-bold p-5">アナリティクス</option>
            <option value class="font-bold p-5">アナリティクス</option>
          </select>
        </div>
        <div class="border-50 rounded-full px-3 py-1 mr-2 hover:bg-gray-400">
          <select name id class="bg-transparent font-bold focus:outline-none">
            <option value class="font-bold">広告</option>
          </select>
        </div>
        <div class="search-bar flex items-center h-full rounded bg-gray-300 pl-2 mx-2">
          <svg
            class="text-gray-600 mx-2 h-4 w-4 fill-current"
            height="20"
            width="20"
            viewBox="0 0 24 24"
            aria-label="検索アイコン"
            role="img"
          >
            <path
              d="M10 16c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6m13.12 2.88l-4.26-4.26A9.842 9.842 0 0 0 20 10c0-5.52-4.48-10-10-10S0 4.48 0 10s4.48 10 10 10c1.67 0 3.24-.41 4.62-1.14l4.26 4.26a3 3 0 0 0 4.24 0 3 3 0 0 0 0-4.24"
            />
          </svg>

          <input
            type="text"
            class="w-full pl-2 bg-transparent h-full focus:outline-none"
            placeholder="検索"
          />
        </div>
        <div class="border-50 rounded-full px-3 py-1 mr-2 hover:bg-gray-400">
          <g-link value class="font-bold">ホームフィード</g-link>
        </div>
        <div class="border-50 rounded-full px-3 py-1 mr-2 hover:bg-gray-400">
          <g-link value class="font-bold">フォロー中</g-link>
        </div>

        <div class="border-50 rounded-full px-3 py-1 mr-2 hover:bg-gray-400 flex items-center">
          <svg
            x="0px"
            y="0px"
            viewBox="0 0 459 459"
            style="enable-background:new 0 0 459 459;"
            xml:space="preserve"
            width="24px"
            height="24px"
            fill="#8e8e8e"
            class="mr-2"
          >
            <ellipse cx="229.5" cy="161" rx="71.5" ry="84" />
            <path
              d="M229.5,0C102.686,0,0,102.77,0,229.5C0,355.823,102.191,459,229.5,459C355.989,459,459,356.656,459,229.5
				C459,102.82,356.396,0,229.5,0z M375.867,349.884c-8.967-44.692-39.664-82.044-81.079-101.501
				C276.854,265.312,253.919,275,229.5,275c-25.083,0-47.968-10.183-65.483-26.801c-41.512,19.292-72.053,56.497-80.925,101.636
				c-8.407-10.191-15.651-21.136-21.681-32.664c9.144-24.053,23.819-46.017,43.356-64.361
				c12.145-11.402,25.694-20.942,40.251-28.489C133.958,205.726,128,183.829,128,161c0-63.433,45.618-114,101.5-114
				C285.492,47,331,97.686,331,161c0,22.859-5.973,44.784-17.06,63.395c38.355,19.914,68.383,52.943,83.614,92.846
				C391.521,328.762,384.275,339.699,375.867,349.884z"
            />
          </svg>
          <span class="text-bold">some User</span>
        </div>
        <div class="border-50 rounded-full p-2 mr-2 hover:bg-gray-400">
          <svg
            class="gUZ B9u U9O kVc"
            height="24"
            width="24"
            viewBox="0 0 24 24"
            aria-hidden="true"
            aria-label
            role="img"
            fill="#8e8e8e"
          >
            <path
              d="M18 12.5a1.5 1.5 0 1 1 .001-3.001A1.5 1.5 0 0 1 18 12.5m-6 0a1.5 1.5 0 1 1 .001-3.001A1.5 1.5 0 0 1 12 12.5m-6 0a1.5 1.5 0 1 1 .001-3.001A1.5 1.5 0 0 1 6 12.5M12 0C5.925 0 1 4.925 1 11c0 2.653.94 5.086 2.504 6.986L2 24l5.336-3.049A10.93 10.93 0 0 0 12 22c6.075 0 11-4.925 11-11S18.075 0 12 0"
            />
          </svg>
        </div>
        <div class="border-50 rounded-full p-2 mr-2 hover:bg-gray-400">
          <svg width="24" height="24" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
            <path
              fill="#8e8e8e"
              d="M8 16c-1.12 0-2.03-.9-2.03-2h4.06c0 1.1-.91 2-2.03 2zm4.72-6.92c1.02.95 1.74 2.19 2.03 3.59H1.25c.29-1.4 1.01-2.64 2.02-3.59V4.67C3.27 2.09 5.39 0 8 0c2.61 0 4.72 2.09 4.72 4.67v4.41z"
            />
          </svg>
        </div>
        <div class="border-50 rounded-full p-2 mr-2 hover:bg-gray-400">
          <svg
            class="gUZ lZJ U9O kVc"
            height="24"
            width="24"
            viewBox="0 0 24 24"
            aria-hidden="true"
            aria-label
            role="img"
            fill="red"
          >
            <path
              d="M17.75 13.25h-4.5v4.5a1.25 1.25 0 0 1-2.5 0v-4.5h-4.5a1.25 1.25 0 0 1 0-2.5h4.5v-4.5a1.25 1.25 0 0 1 2.5 0v4.5h4.5a1.25 1.25 0 0 1 0 2.5M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0"
            />
          </svg>
        </div>
        <div class="border-50 rounded-full p-2 hover:bg-gray-400">
          <svg
            class="gUZ B9u U9O kVc"
            height="22"
            width="22"
            viewBox="0 0 24 24"
            aria-hidden="true"
            aria-label
            role="img"
            fill="#8e8e8e"
          >
            <path
              d="M12 9c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3M3 9c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm18 0c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3z"
            />
          </svg>
        </div>
      </nav>
    </header>
    <slot />
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
nav {
  height: 64px;
  font-size: 16px !important ;
  font-weight: 700;
  background: white;
  // font-family: SF Pro JP, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
  //   Oxygen-Sans, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
  //   Helvetica, "\30D2\30E9\30AE\30CE\89D2\30B4 Pro W3", Hiragino Kaku Gothic Pro,
  //   "\30E1\30A4\30EA\30AA", Meiryo, "\FF2D\FF33 \FF30\30B4\30B7\30C3\30AF",
  //   Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol;
  .search-bar {
    min-width: 45%;
  }
}
</style>
