class Slugify < Middleman::Extension
    def initialize(app, options_hash={}, &block)
        super
    end

    helpers do
        def slugify(input)
            input.downcase.gsub(/\s/, "_")
        end
    end
end

::Middleman::Extensions.register(:slugify, Slugify)
