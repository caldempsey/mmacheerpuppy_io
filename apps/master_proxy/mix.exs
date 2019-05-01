defmodule MasterProxy.MixProject do
  use Mix.Project

  def project do
    [app: :master_proxy,
     version: "0.1.0",
     build_path: "../../_build",
     config_path: "../../config/config.exs",
     deps_path: "../../deps",
     lockfile: "../../mix.lock",
     elixir: "~> 1.8.1",
     build_embedded: Mix.env == :prod,
     start_permanent: Mix.env == :prod,
     deps: deps()]
  end

  def application do
    [applications: [:logger, :cowboy, :plug, :mmacheerpuppy_io_client, :mmacheerpuppy_io_api],
     mod: {MasterProxy.Application, []}]
  end

  defp deps do

    [
      {:plug_cowboy, "~> 2.0"},
      {:mmacheerpuppy_io_client, in_umbrella: true},
      {:mmacheerpuppy_io_api, in_umbrella: true}
    ]
  end
end
