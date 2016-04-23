json.array!(@traps) do |trap|
  json.extract! trap, :id, :name, :lat, :long
  json.url trap_url(trap, format: :json)
end
