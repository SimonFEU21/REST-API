<template>
  <!-- Navbar -->
  <nav class="text-center navbar navbar-expand-lg navbar-light bg-light">
    <!-- Container wrapper -->
    <div class="container">
      <!-- Toggle button -->
      <button
        class="navbar-toggler"
        type="button"
        data-mdb-toggle="collapse"
        data-mdb-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i class="fas fa-bars"></i>
      </button>

      <!-- Collapsible wrapper -->
      <div
        class="collapse navbar-collapse justify-content-center"
        id="navbarSupportedContent"
>
        <!-- Navbar brand -->
        <router-link class="navbar-brand mt-2 mt-lg-0" to="/">
          <i class="fa-solid fa-desktop me-1"> Gamingcomponents.se </i>
        </router-link>
        <!-- Left links -->
        <ul class="navbar-nav mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/Products">Products</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/about">About Us</router-link>
          </li>
        </ul>
        <!-- Left links -->
      </div>
      <!-- Collapsible wrapper -->

      <!-- Right elements -->
      <div class="d-flex align-items-center">
        <!-- Icon -->

        <!-- Notifications -->
        <div class="dropdown">
          <a
            class="text-reset me-3 dropdown-toggle hidden-arrow"
            href="#"
            id="navbarDropdownMenuLink"
            role="button"
            data-mdb-toggle="dropdown"
            aria-expanded="false"
          >
            <!-- <i class="fas fa-shopping-cart"></i> -->
            <!-- <span class="badge rounded-pill badge-notification bg-danger">1</span> -->
          </a>
          <div
            class="dropdown-menu dropdown-menu-end"
            aria-labelledby="navbarDropdownMenuLink"
          >
            SHOPPINGCART
          </div>
        </div>
        <!-- Avatar -->
        <div class="dropdown">
          <a
            class="text-reset dropdown-toggle hidden-arrow"
            href="#"
            id="navbarDropdownMenuAvatar"
            role="button"
            data-mdb-toggle="dropdown"
            aria-expanded="false"
          >
            <!-- <i class="fa-solid fa-user"></i> -->
          </a>
          <!-- <ul
          class="dropdown-menu dropdown-menu-end"
          aria-labelledby="navbarDropdownMenuAvatar"
        >
          <li>
            <a class="dropdown-item" href="#">My profile</a>
          </li>
          <li>
            <a class="dropdown-item" href="#">Settings</a>
          </li>
          <li>
            <a class="dropdown-item" href="#">Logout</a>
          </li>
        </ul> -->
        </div>
      </div>
      <!-- Right elements -->
    </div>
    <!-- Container wrapper -->
  </nav>
  <!-- Navbar -->
</template>

<script>
export default {
  name: "primaryNavigation",
};
</script>

<style></style>
