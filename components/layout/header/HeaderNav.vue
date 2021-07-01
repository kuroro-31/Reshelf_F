<template>
  <nav class="nav">
    <div
      class="
        max-w-screen-xl
        container
        w-full
        mx-auto
        flex flex-wrap
        items-center
        justify-between
        mt-0
      "
    >
      <div class="nav-left py-2.5">
        <!-- <input id="side" type="checkbox" name="" value="" /> -->
        <!-- <label for="side" class="toggle">
          <menu-icon size="1.5x"></menu-icon>
        </label> -->

        <NuxtLink to="/" class="title-link">
          <h1>
            <!-- <img
              src="@/assets/images/logo.svg"
              alt="Reshelf Logo"
              width="112"
              height="24"
              class="responsive"
            /> -->
            <!-- <svg
              class="responsive"
              xmlns="http://www.w3.org/2000/svg"
              width="112"
              height="24"
              viewBox="0 0 512.004 105.242"
            >
              <g id="logo-group" transform="translate(-423.454 -456.91)">
                <path
                  class="path"
                  d="M479.9,526.74c12.432-4.372,19.263-14.482,19.263-30.6,0-21.039-13.115-31.286-36.066-31.286H424.023v95.632h21.449V529.2h13.8l16.941,31.286h24.181Zm-18.034-15.028H445.336V482.475h16.531c11.066,0,17.214,3.962,17.214,14.482,0,10.656-6.284,14.755-17.214,14.755Z"
                />
                <path
                  class="path"
                  d="M574.15,495.863c-6.011-6.284-14.482-9.563-25.138-9.563-21.449,0-35.93,15.165-35.93,37.707s14.345,37.16,36.613,37.16c12.022,0,22.268-4.235,29.509-12.3L568.548,537.8a24.488,24.488,0,0,1-17.077,7.241c-8.88,0-15.3-5.328-17.624-14.618l-.273-1.23h50.138c.683-14.482-2.6-25.957-9.563-33.334Zm-10.246,22.4H533.3l.137-1.093c1.639-9.836,7.651-15.984,15.711-15.984,8.743,0,14.618,6.558,14.618,16.257Z"
                />
                <path
                  class="path"
                  d="M631.193,515.408c-6.968-2.186-12.979-4.1-12.979-8.743,0-3.825,3.006-6.148,7.924-6.148,5.875,0,13.662,2.6,22,7.241l6.831-13.8a55.034,55.034,0,0,0-27.87-7.787c-17.077,0-27.734,8.743-27.734,22.815-.137,15.3,12.842,19.263,23.225,22.541,7.1,2.186,13.252,4.1,13.252,9.153,0,3.825-3.415,6.148-8.743,6.148-7.924,0-16.8-3.142-24.728-8.743l-6.421,13.525c8.2,6.421,18.989,9.973,30.6,9.973,17.487,0,28.827-9.017,28.827-22.951.137-15.437-13.252-19.536-24.045-22.815Z"
                />
                <path
                  class="path"
                  d="M717.468,486.03c-10.246.137-18.171,4.645-22.815,12.979l-1.913,3.279V458.712H671.975V560.219h20.766V524.152c0-11.339,6.148-18.853,15.437-18.853,8.334,0,13.525,5.875,13.525,15.3v39.755h20.766V513.907c0-16.941-9.836-27.87-25-27.87Z"
                />
                <path
                  class="path"
                  d="M818.923,495.863c-6.011-6.284-14.482-9.563-25.138-9.563-21.449,0-35.93,15.165-35.93,37.707s14.345,37.16,36.613,37.16c12.022,0,22.268-4.235,29.509-12.3L813.321,537.8a24.488,24.488,0,0,1-17.077,7.241c-8.88,0-15.3-5.328-17.624-14.618l-.273-1.23h50.138c.683-14.482-2.6-25.957-9.563-33.334Zm-10.246,22.4h-30.6l.137-1.093c1.639-9.836,7.651-15.984,15.711-15.984,8.743,0,14.618,6.558,14.618,16.257Z"
                />
                <path
                  class="path"
                  d="M865.444,560.217V458.711H844.678V560.217Z"
                />
                <path
                  class="path"
                  d="M913,477.153a9.189,9.189,0,0,1,6.694-2.459,14.765,14.765,0,0,1,7.924,2.6l7.1-15.028a37.409,37.409,0,0,0-18.444-4.782c-15.847,0-26.094,9.7-26.094,24.728v7.924h-9.563v13.935h9.563v55.877h20.493V504.081h15.984V490.146H910.677v-6.421a9.38,9.38,0,0,1,2.6-6.831Z"
                />
              </g>
            </svg> -->
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              width="150"
              height="50"
              viewBox="0 0 924.682 173.253"
            >
              <defs>
                <radialGradient
                  id="radial-gradient"
                  cx="0.5"
                  cy="0.5"
                  r="0.505"
                  gradientTransform="translate(0.01) scale(0.979 1)"
                  gradientUnits="objectBoundingBox"
                >
                  <stop offset="0.01" stop-color="#2cbfbf" />
                  <stop offset="1" stop-color="#2cd5bf" />
                </radialGradient>
                <linearGradient
                  id="linear-gradient"
                  x1="0.17"
                  y1="-0.075"
                  x2="0.742"
                  y2="0.838"
                  gradientUnits="objectBoundingBox"
                >
                  <stop offset="0.21" stop-color="#2cd5bf" />
                  <stop offset="1" stop-color="#2cbfbf" />
                </linearGradient>
                <radialGradient
                  id="radial-gradient-2"
                  cx="0.5"
                  cy="0.5"
                  r="0.485"
                  gradientTransform="translate(-0.033) scale(1.066 1)"
                  xlink:href="#radial-gradient"
                />
              </defs>
              <g
                id="グループ_74"
                data-name="グループ 74"
                transform="translate(-1023.84 1676.228)"
              >
                <g id="logo-group" transform="translate(1290.928 -1656.228)">
                  <path
                    id="path170980"
                    d="M495.972,544.541c16.008-5.629,24.8-18.647,24.8-39.4,0-27.091-16.888-40.284-46.44-40.284H424.023V587.991h27.619V547.706h17.767l21.813,40.284h31.137Zm-23.221-19.351H451.466V487.544h21.285c14.249,0,22.165,5.1,22.165,18.647,0,13.721-8.092,19-22.165,19Z"
                    transform="translate(-424.023 -455.359)"
                    fill="#bec4cc"
                  />
                  <path
                    id="path170982"
                    d="M591.715,498.613c-7.74-8.092-18.647-12.314-32.369-12.314-27.619,0-46.264,19.527-46.264,48.552S531.553,582.7,560.226,582.7c15.48,0,28.673-5.453,38-15.832L584.5,552.618a31.533,31.533,0,0,1-21.989,9.324c-11.434,0-19.7-6.861-22.693-18.823l-.352-1.583h64.56c.88-18.647-3.342-33.423-12.314-42.922Zm-13.193,28.849h-39.4l.176-1.407c2.111-12.666,9.851-20.581,20.229-20.581,11.258,0,18.823,8.444,18.823,20.933Z"
                    transform="translate(-398.406 -449.19)"
                    fill="#bec4cc"
                  />
                  <path
                    id="path170984"
                    d="M641.331,523.817C632.36,521,624.62,518.54,624.62,512.559c0-4.926,3.87-7.916,10.2-7.916,7.564,0,17.591,3.342,28.323,9.324l8.8-17.767a70.866,70.866,0,0,0-35.887-10.027c-21.989,0-35.711,11.258-35.711,29.377-.176,19.7,16.536,24.8,29.9,29.025,9.147,2.815,17.063,5.277,17.063,11.786,0,4.926-4.4,7.916-11.258,7.916-10.2,0-21.637-4.046-31.841-11.258l-8.268,17.415c10.555,8.268,24.451,12.842,39.4,12.842,22.517,0,37.118-11.61,37.118-29.553.176-19.878-17.063-25.155-30.961-29.377Z"
                    transform="translate(-374.572 -449.227)"
                    fill="#bec4cc"
                  />
                  <path
                    id="path170986"
                    d="M730.553,493.888c-13.194.176-23.4,5.981-29.377,16.712l-2.463,4.222V458.712H671.975v130.7h26.739V542.975c0-14.6,7.916-24.275,19.877-24.275,10.731,0,17.415,7.564,17.415,19.7v51.19h26.739v-59.81c0-21.813-12.666-35.887-32.193-35.887Z"
                    transform="translate(-352.703 -457.125)"
                    fill="#bec4cc"
                  />
                  <path
                    id="path170988"
                    d="M836.488,498.613c-7.74-8.092-18.647-12.314-32.369-12.314-27.619,0-46.264,19.527-46.264,48.552S776.326,582.7,805,582.7c15.48,0,28.673-5.453,38-15.832l-13.721-14.249a31.532,31.532,0,0,1-21.989,9.324c-11.434,0-19.7-6.861-22.693-18.823l-.352-1.583H848.8c.879-18.647-3.342-33.423-12.314-42.922Zm-13.193,28.849h-39.4l.176-1.407c2.111-12.666,9.851-20.581,20.229-20.581,11.259,0,18.823,8.444,18.823,20.933Z"
                    transform="translate(-328.001 -449.19)"
                    fill="#bec4cc"
                  />
                  <path
                    id="path170990"
                    d="M871.417,589.414v-130.7H844.678v130.7Z"
                    transform="translate(-303.028 -457.126)"
                    fill="#bec4cc"
                  />
                  <path
                    id="path170992"
                    d="M922.313,482.812a11.833,11.833,0,0,1,8.62-3.167,19.012,19.012,0,0,1,10.2,3.342l9.147-19.351a48.168,48.168,0,0,0-23.749-6.157c-20.4,0-33.6,12.49-33.6,31.841v10.2H880.622v17.943h12.314v71.949h26.387v-71.93H939.9V499.542H919.322v-8.268a12.078,12.078,0,0,1,3.343-8.8Z"
                    transform="translate(-292.69 -457.48)"
                    fill="#bec4cc"
                  />
                </g>
                <g id="logo" transform="translate(1023.84 -1676.228)">
                  <path
                    id="パス_519"
                    data-name="パス 519"
                    d="M669.237,298.1a6.263,6.263,0,0,0-.037-.642,12.1,12.1,0,0,0-.886-3.8c-1.69-5.2-5.033-11.9-4.156-15.417,3.232-12.928-.254-25.9-8.547-36.453a83.434,83.434,0,0,0-92.586-27.4c-49.548-17.005-71.5,21.512-70.644,23.682.923,2.309,4.156,1.847,12.467,2.309,6.219.346,13.215,4.054,16.341,5.9A82.954,82.954,0,0,0,506.7,293.256c0,.868,0,1.731.042,2.59l-.042-.051a87.267,87.267,0,0,0,87.266,87.266s7.221.591,24.241-1.154c18.007-1.847,19.129-5.772,27.011-5.772,8.311,0,12.467,2.77,13.852.923s-4.617-12.928-5.079-20.316.462-20.316-.923-19.854-9.7,9.7-15.237,14.314-9.235,6-9.7,7.388,0,4.156-1.385,5.079-9.7,4.617-20.316,4.617a44.788,44.788,0,0,1-35.6-71.942c.212.882.392,1.778.526,2.683,1.385,9.235,1.385,16.936,1.616,17.933s1.616.536,2.539-.388,14.314-7.849,17.546-18.931c2.027-6.926,3.324-11.894,3.9-17.92A44.834,44.834,0,0,1,645,300.7a12.112,12.112,0,0,0,1.242,3.426h0a12.227,12.227,0,0,0,23-5.795Z"
                    transform="translate(-492.358 -209.905)"
                    fill="url(#radial-gradient)"
                  />
                  <path
                    id="パス_520"
                    data-name="パス 520"
                    d="M523.44,396.42"
                    transform="translate(-509.089 -310.299)"
                    fill="none"
                    stroke="#000"
                    stroke-miterlimit="10"
                    stroke-width="1"
                  />
                  <path
                    id="パス_521"
                    data-name="パス 521"
                    d="M664.12,334.92a49.636,49.636,0,0,0-3.477,99.147,44.788,44.788,0,1,1,50.111-66.073A12.11,12.11,0,0,0,712,371.42a49.659,49.659,0,0,0-47.876-36.5Z"
                    transform="translate(-558.116 -277.195)"
                    fill="#2baaaa"
                  />
                  <path
                    id="パス_522"
                    data-name="パス 522"
                    d="M563.026,214.592c-49.548-17.005-71.5,21.512-70.644,23.682.923,2.309,4.156,1.847,12.467,2.309,6.219.346,13.215,4.054,16.341,5.9a83.531,83.531,0,0,1,41.837-31.887Z"
                    transform="translate(-492.358 -210.099)"
                    fill="url(#linear-gradient)"
                  />
                  <path
                    id="パス_523"
                    data-name="パス 523"
                    d="M685.968,298.1a6.263,6.263,0,0,0-.037-.642,12.1,12.1,0,0,0-.886-3.8c-1.69-5.2-5.033-11.9-4.156-15.417,3.232-12.928-.254-25.9-8.547-36.453a83.342,83.342,0,0,0-148.9,51.459c0,.868,0,1.732.042,2.59l-.042-.051a87.268,87.268,0,0,0,87.266,87.266s7.221.591,24.241-1.154c18.007-1.847,19.129-5.772,27.011-5.772,8.311,0,12.467,2.77,13.852.923s-4.617-12.928-5.079-20.316.462-20.316-.923-19.854-9.7,9.7-15.237,14.314-9.235,6-9.7,7.388,0,4.156-1.385,5.079-9.7,4.617-20.316,4.617a44.788,44.788,0,0,1-11.543-1.51,49.636,49.636,0,0,1-30.77-85.42s5.85,8.459,7.235,17.693,1.385,16.936,1.616,17.933,1.616.536,2.54-.388,14.313-7.849,17.546-18.931c3.19-10.948,4.58-16.945,4.156-30.012h1.14a49.657,49.657,0,0,1,47.875,36.486,12.227,12.227,0,0,0,23-5.79v-.231Z"
                    transform="translate(-509.089 -209.9)"
                    fill="url(#radial-gradient-2)"
                  />
                </g>
              </g>
            </svg>
          </h1>
        </NuxtLink>
      </div>

      <div class="nav-center flex items-center py-2.5"></div>

      <div class="nav-right">
        <!-- <span class="mr-2">{{ $auth.loggedIn }}</span> -->

        <!-- 検索 -->
        <input type="text" class="search" placeholder="Search..." />

        <!-- お気に入り -->
        <button
          v-if="isAuthenticated"
          class="dropdown"
          @mouseover="like = true"
          @mouseleave="like = false"
        >
          <heart-icon size="1.5x" class="dropdown-icon"></heart-icon>
          <transition>
            <div v-if="like">
              <div
                class="dropdown-contents"
                @mouseover="like = true"
                @mouseleave="like = false"
              >
                <div class="p-8">お気に入りの中身は空です</div>
              </div>
            </div>
          </transition>
        </button>

        <!-- カート -->
        <button
          v-if="isAuthenticated"
          class="dropdown"
          @mouseover="cart = true"
          @mouseleave="cart = false"
        >
          <shopping-cart-icon
            size="1.5x"
            class="dropdown-icon"
          ></shopping-cart-icon>
          <transition>
            <div v-if="cart">
              <div
                class="dropdown-contents"
                @mouseover="cart = true"
                @mouseleave="cart = false"
              >
                <div class="cart-content">
                  <p class="cart-content-name">My Cart</p>
                  <p class="divider"></p>

                  <div class="cart-content-products scroll-none">
                    <!-- 商品１ -->
                    <div class="w-full flex py-4">
                      <img
                        class="cart-content-img"
                        src="https://i.gyazo.com/3361b22275519a99133abe27ea99f34c.png"
                        alt=""
                      />
                      <div class="cart-content-box">
                        <div class="w-full flex flex-col items-start">
                          <p class="cart-content-title">
                            ゼロからはじめる
                            Dockerによるアプリケーション実行環境構築
                          </p>
                          <p class="cart-content-author">
                            クラピカクラピカクラピカ
                          </p>
                        </div>
                        <div class="cart-content-price">¥ 3,500</div>
                      </div>
                    </div>
                    <p class="divider"></p>
                    <!-- 商品２ -->
                    <div class="w-full flex py-4">
                      <img
                        class="cart-content-img"
                        src="https://i.gyazo.com/3361b22275519a99133abe27ea99f34c.png"
                        alt=""
                      />
                      <div class="cart-content-box">
                        <div class="w-full flex flex-col items-start">
                          <p class="cart-content-title">
                            ゼロからはじめる
                            Dockerによるアプリケーション実行環境構築
                          </p>
                          <p class="cart-content-author">
                            クラピカクラピカクラピカ
                          </p>
                        </div>
                        <div class="cart-content-price">¥ 3,500</div>
                      </div>
                    </div>
                    <p class="divider"></p>
                    <!-- 商品１ -->
                    <div class="w-full flex py-4">
                      <img
                        class="cart-content-img"
                        src="https://i.gyazo.com/3361b22275519a99133abe27ea99f34c.png"
                        alt=""
                      />
                      <div class="cart-content-box">
                        <div class="w-full flex flex-col items-start">
                          <p class="cart-content-title">
                            ゼロからはじめる
                            Dockerによるアプリケーション実行環境構築
                          </p>
                          <p class="cart-content-author">
                            クラピカクラピカクラピカ
                          </p>
                        </div>
                        <div class="cart-content-price">¥ 3,500</div>
                      </div>
                    </div>
                    <p class="divider"></p>
                    <!-- 商品２ -->
                    <div class="w-full flex py-4">
                      <img
                        class="cart-content-img"
                        src="https://i.gyazo.com/3361b22275519a99133abe27ea99f34c.png"
                        alt=""
                      />
                      <div class="cart-content-box">
                        <div class="w-full flex flex-col items-start">
                          <p class="cart-content-title">
                            ゼロからはじめる
                            Dockerによるアプリケーション実行環境構築
                          </p>
                          <p class="cart-content-author">
                            クラピカクラピカクラピカ
                          </p>
                        </div>
                        <div class="cart-content-price">¥ 3,500</div>
                      </div>
                    </div>
                    <p class="divider"></p>
                    <!-- 商品１ -->
                    <div class="w-full flex py-4">
                      <img
                        class="cart-content-img"
                        src="https://i.gyazo.com/3361b22275519a99133abe27ea99f34c.png"
                        alt=""
                      />
                      <div class="cart-content-box">
                        <div class="w-full flex flex-col items-start">
                          <p class="cart-content-title">
                            ゼロからはじめる
                            Dockerによるアプリケーション実行環境構築
                          </p>
                          <p class="cart-content-author">
                            クラピカクラピカクラピカ
                          </p>
                        </div>
                        <div class="cart-content-price">¥ 3,500</div>
                      </div>
                    </div>
                    <p class="divider"></p>
                    <!-- 商品２ -->
                    <div class="w-full flex py-4">
                      <img
                        class="cart-content-img"
                        src="https://i.gyazo.com/3361b22275519a99133abe27ea99f34c.png"
                        alt=""
                      />
                      <div class="cart-content-box">
                        <div class="w-full flex flex-col items-start">
                          <p class="cart-content-title">
                            ゼロからはじめる
                            Dockerによるアプリケーション実行環境構築
                          </p>
                          <p class="cart-content-author">
                            クラピカクラピカクラピカ
                          </p>
                        </div>
                        <div class="cart-content-price">¥ 3,500</div>
                      </div>
                    </div>
                    <p class="divider"></p>
                  </div>

                  <re-button class="pt-4 re-button re-button-small">
                    <button
                      :class="
                        modal
                          ? 're-button-primary-border'
                          : 're-button-primary-filled'
                      "
                      @click="modal = !modal"
                    >
                      Checkout
                    </button>
                  </re-button>
                </div>
              </div>
            </div>
          </transition>
        </button>

        <!-- ユーザードロップダウン -->
        <button
          class="dropdown"
          @mouseover="dropdown = true"
          @mouseleave="dropdown = false"
        >
          <img
            class="dropdown-img"
            width="40px"
            height="40px"
            src="https://i.gyazo.com/ea69860bb5555cb60c4860a3bd7b3e70.png"
          />
          <transition>
            <div
              v-if="dropdown"
              class="dropdown-contents scroll-none"
              @mouseover="dropdown = true"
              @mouseleave="dropdown = false"
            >
              <div class="menu">
                <div class="menu-name">
                  <img
                    width="50px"
                    height="50px"
                    src="https://i.gyazo.com/ea69860bb5555cb60c4860a3bd7b3e70.png"
                  />
                  <span class="menu-name-person">
                    <!-- {{ loggedInUser.name }} -->
                    Elizabeth Swan
                  </span>
                </div>
                <div class="menu-me">
                  <span class="menu-me-title">受講生</span>
                  <nuxt-link class="menu-me-link" to="/user/learning">
                    受講中のコース
                  </nuxt-link>
                  <nuxt-link class="menu-me-link" to="/user/like">
                    お気に入り
                  </nuxt-link>
                </div>
                <div class="menu-me">
                  <span class="menu-me-title">講師</span>
                  <nuxt-link class="menu-me-link" to="/teacher/course">
                    ダッシュボード
                  </nuxt-link>
                </div>
                <!-- <div class="menu-me">
                  <nuxt-link class="menu-me-link" to="/user/top">
                    通知・お知らせ
                  </nuxt-link>
                  <nuxt-link class="menu-me-link" to="/user/top">
                    メッセージ
                  </nuxt-link>
                </div> -->
                <div class="menu-me">
                  <div class="">
                    <select v-model="$colorMode.preference">
                      <option value="system">System</option>
                      <option value="light">Light</option>
                      <option value="dark">Dark</option>
                      <option value="blue">Blue</option>
                      <option value="purple">purple</option>
                      <option value="gold">gold</option>
                    </select>
                  </div>
                  <span class="menu-me-title">共通</span>
                  <nuxt-link class="menu-me-link" to="/user/setting">
                    アカウント設定
                  </nuxt-link>
                  <button class="menu-me-link" to="/user/top" @click="logout">
                    ログアウト
                  </button>
                </div>
              </div>
            </div>
          </transition>
        </button>

        <!-- ログイン -->
        <!-- <nuxt-link v-if="!isAuthenticated" flat to="/auth/login">
          ログイン
        </nuxt-link> -->
        <div v-if="!isAuthenticated" class="py-2.5">
          <span class="cursor-pointer" @click="modal = !modal">Log in</span>
          <ReModal v-if="modal" @close="modal = !modal">
            <template slot="header">Welcome To Reshelf！</template>
            <!-- default -->
            <div class="w-full flex justify-center">
              <form @submit.prevent="submit">
                <button
                  :class="post ? 'fb-btn-posted' : 'fb-btn'"
                  @click="post = !post"
                >
                  Facebookで新規登録・ログイン
                </button>
              </form>
            </div>
            <!-- /default -->
            <template slot="footer">
              ※
              Reshelfでは、多重アカウントを防止するため、Facebookでのアカウント作成をお願いしています。
            </template>
          </ReModal>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import ReButton from '@/components/atoms/ReButton'
import ReModal from '@/components/atoms/ReModal'
import {
  // MenuIcon,
  ShoppingCartIcon,
  HeartIcon,
} from 'vue-feather-icons'

export default {
  components: {
    ReButton,
    ReModal,
    // MenuIcon,
    ShoppingCartIcon,
    HeartIcon,
  },
  data() {
    return {
      visible: false,
      modal: false,
      message: '',
      cart: false,
      dropdown: false,
      post: false,
      like: false,
    }
  },
  computed: {
    isAuthenticated() {
      return this.$auth.loggedIn
    },
    loggedInUser() {
      return this.$auth.user
    },
  },
  methods: {
    async submit() {
      await this.$axios
        .post('/api/auth/facebook')
        .then(() => {})
        .catch((err) => {
          console.log(err)
        })
      // await this.$authentication.loginWith('local', {
      //   data: this.form,
      // })
      // this.$router.push({
      //   path: this.$route.query.redirect || '/',
      // })
    },
    async logout() {
      await this.$auth.logout()
    },
  },
}
</script>
<style lang="scss" scoped>
.toggle {
  @apply mr-4 cursor-pointer p-2 flex-shrink-0;
  height: 40px;
  width: 40px;
  &:hover {
    @apply rounded-lg;
    background: var(--eee);
  }
}
.nav {
  @apply sticky top-0 z-20 flex items-center justify-center h-16;
  background-color: var(--bg-secondary);
  // border-bottom-width: 1px;
  // border-style: solid;
  // border-color: #e5e7eb;
  // &::after {
  //   content: '';
  //   position: absolute;
  //   left: 0;
  //   right: 0;
  //   top: 100%;
  //   height: 4px;
  //   background: linear-gradient(
  //     180deg,
  //     rgba(9, 30, 66, 0.13) 0,
  //     rgba(9, 30, 66, 0.13) 1px,
  //     rgba(9, 30, 66, 0.08) 1px,
  //     rgba(9, 30, 66, 0) 4px
  //   );
  // }
  &-left {
    @apply flex items-center lg:w-1/4 xl:w-1/5 mr-12;
    height: 45px;
    width: 240px;
  }
  &-center {
    @apply mr-auto;
  }
  &-right {
    @apply justify-end;
  }
  &-left,
  &-right {
    @apply flex h-full items-center;
  }
}
.dropdown {
  @apply px-3 relative;
  height: 60px;
  &-icon {
    @apply flex-shrink-0 inline-block cursor-pointer;
  }
  &-img {
    @apply object-cover rounded-full shadow-lg cursor-pointer;
    width: 40px;
    height: 40px;
  }
  &-contents {
    @apply absolute top-0 right-0 z-50 rounded-lg shadow-lg overflow-y-auto cursor-default;
    background-color: var(--bg-secondary);
    @screen lg {
      margin-top: 60px;
      width: 300px;
      max-height: calc(100vh - 120px);
    }
  }
}
.cart-content {
  @apply overflow-auto flex flex-col p-4 items-start;
  &-name {
    @apply pb-2 text-lg font-bold;
  }
  &-img {
    @apply object-cover shadow-lg cursor-pointer;
    height: 50px;
    width: 40px;
  }
  &-box {
    @apply w-full flex items-start pl-4;
    width: 228px;
  }
  &-products {
    @apply overflow-y-auto;
    max-height: 300px;
  }
  &-title {
    @apply w-full font-bold break-words text-left;
  }
  &-author {
    @apply w-full truncate text-sm text-grey text-left pt-2;
  }
  &-price {
    @apply pl-2 whitespace-nowrap;
  }
}
.fb-btn {
  @apply py-3 px-4 text-white rounded-lg text-xl font-bold  duration-200;
  background: #1976f2;
  border: 1px solid #1976f2;

  &:hover {
    -webkit-box-shadow: 0 8px 25px -8px #1976f2;
    box-shadow: 0 8px 25px -8px #1976f2;
  }
}
.fb-btn-posted {
  @apply py-3 px-4 text-white rounded-lg text-xl font-bold;
  color: #1976f2;
  border: 1px solid #1976f2;
}
.show {
  @apply block;
}
.dropdown-bg {
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 2;
}
.menu {
  &-name {
    @apply flex items-center p-4;
    border-bottom: 1px solid #ccc;
    &-person {
      @apply ml-2;
      max-width: 140px;
    }
  }
  &-me {
    @apply flex flex-col items-start p-3;
    border-bottom: 1px solid #ccc;
    &-title {
      @apply text-sm font-bold pt-2;
      color: var(--sub-color);
    }
    &-link {
      @apply py-3 w-full rounded-lg text-left px-4 duration-200;
      &:hover {
        @apply cursor-pointer;
        transform: translateX(5px);
        background: #f0f2f6;
        border-radius: 6px;
      }
    }
  }
}

@keyframes slide-in {
  0% {
    transform: translateX(-15px);
    opacitx: 0;
  }
  100% {
    transform: translateX(0px);
    opacity: 1;
  }
}
// .divider {
//   @apply w-full z-50;
//   border-bottom: 1px var(--thin-gray) solid;
//   padding: 0 -9999px;
// }

.search {
  @apply px-4 py-2 rounded-lg;
  background-color: var(--bg-secondary);
  background-clip: padding-box;
  border: 1px solid var(--gray);
}

.purple {
  width: 30px;
  height: 30px;
  background: $purple;
}
</style>
