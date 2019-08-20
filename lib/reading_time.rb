class ReadingTime < Middleman::Extension
    def initialize(app, options_hash={}, &block)
        super
    end

    helpers do
        def reading_time(input)
            words_per_minute = 80

            words = input.split.size
            minutes = (words/words_per_minute).floor
            minutes = 1 if minutes === 0
            "#{minutes} minute read"
        end
    end
end

::Middleman::Extensions.register(:reading_time, ReadingTime)
