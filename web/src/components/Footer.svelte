<script>
  import { GithubIcon, LinkedinIcon } from 'svelte-feather-icons';
</script>

<!-- In your root layout (e.g., App.svelte or layout file) -->
<div class="min-h-screen flex flex-col">
  <main class="flex-1 bg-black text-green-500">
    <!-- page content -->
  </main>

  <footer class="bg-black text-green-500 p-2 flex justify-center items-center">
    <p class="mr-4">Copyright © 2025</p>
    <a class="p-2" href="https://github.com/alielbekov" aria-label="GitHub"><GithubIcon /></a>
    <a class="p-2" href="https://www.linkedin.com/in/ali-elbekov-b0077a203/" aria-label="LinkedIn"><LinkedinIcon /></a>
  </footer>
</div>
