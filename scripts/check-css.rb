# frozen_string_literal: true

# Ruby Sass silently passes @use through to CSS. Fail before deploying a site
# whose stylesheet has not actually been compiled.
css_path = ARGV.fetch(0, "_site/css/main.css")
css = File.read(css_path)
abort "Uncompiled Sass in #{css_path}" if css.match?(/@(use|forward)\b/)

%w[.site-header .home-hero .team-grid].each do |selector|
  abort "Missing #{selector} in #{css_path}" unless css.include?(selector)
end

puts "Verified compiled site styles in #{css_path}"
