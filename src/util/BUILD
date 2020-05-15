package(default_visibility = ["//visibility:public"])

cc_library(
    name = "flags",
    srcs = ["flags.cc"],
    hdrs = ["flags.h"],
    deps = [
        "@com_github_abseil_absl//absl/flags:flag",
        "@com_github_abseil_absl//absl/flags:parse",
        "@com_github_gflags_gflags//:gflags",
    ],
)

cc_library(
    name = "status_or",
    hdrs = ["status_or.h"],
    deps = [
        "@com_github_google_glog//:glog",
        "@com_github_grpc_grpc//:grpc++",
    ],
)

cc_library(
    name = "status_macros",
    srcs = ["status_macros.cc"],
    hdrs = ["status_macros.h"],
    deps = [
        ":status_or",
        "@com_github_abseil_absl//absl/strings",
        "@com_github_abseil_absl//absl/strings:str_format",
        "@com_github_google_glog//:glog",
        "@com_github_grpc_grpc//:grpc++",
    ],
)